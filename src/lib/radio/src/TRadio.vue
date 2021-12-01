<template>
  <div
    class="t-radio"
    v-radio:[activeColor]="radioState"
    :class="{ 't-radio-border': border }"
    ref="TRadioRef"
  >
    <label>
      <span
        v-if="!isButton"
        :class="{ 't-radio-instructions-disabled': disabled }"
        :style="{
          width: radioSize + 'px',
          height: radioSize + 'px',
        }"
        @click="setRaio"
        class="t-radio-instructions"
      ></span>
      <span
        @click="setRaio"
        :class="{
          't-radio-text-disabled': disabled,
          't-radio-button': isButton,
          't-radio-first-radio': isFirstRadio,
          't-radio-last-radio': isLastRadio,
        }"
        style="t-radio-label-text"
        ref="labelRef"
      >
        {{ option && option.label }}
      </span>
      <input class="t-radio-inp" type="radio" :disabled="disabled" />
    </label>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  ref,
  getCurrentInstance,
  watch,
  reactive,
  onMounted,
  toRefs,
  ComputedRef,
} from "vue";
import { IRadioProps, ERadioSizeType, IOptionProp, AllType } from "./type";
import { radio } from "./directives";
import TRadioGroup from "../../radio-group";

export default defineComponent({
  name: "t-radio",
  emits: ["update:modelValue"],
  props: {
    modelValue: AllType,
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "normal",
      validator: (value: string) => {
        if (ERadioSizeType[value]) return true;
        console.warn(
          "[Radio Component Warn]: The only types of size are big, normal and small"
        );
      },
    },

    activeColor: {
      type: String,
      default: "#00cb51",
    },

    option: {
      type: Object as PropType<IOptionProp>,
      required: true,
    },

    border: {
      type: Boolean,
      default: false,
    },
  },
  directives: {
    radio,
  },
  setup(props: IRadioProps, { emit }) {
    const state = reactive({
      radioState: false,
      isRadioGroup: false,
      isButton: false,
      isFirstRadio: false,
      isLastRadio: false,
    });

    const TRadioRef = ref<HTMLDivElement>();
    const labelRef = ref<HTMLSpanElement>();

    /**
     * 获取当前组件的实例
     */
    let instance = getCurrentInstance();

    // 获取父组件的modelValue数据
    let parentKey: ComputedRef;

    // 获取当前组件的key
    let thisKey = instance.vnode.key;

    // let radioState = ref(thisKey === parentKey.value);

    // radio的点击事件
    const setRaio = ($event: MouseEvent) => {
      if (props.disabled) return;
      state.radioState = !state.radioState;
      let checkedValue = state.radioState ? props.option.value : "";
      emit("update:modelValue", checkedValue);

      if (state.isRadioGroup) {
        /**
         * 当前radio发生点击，调用父组件的方法
         * 同样是调用父组件的ctx编辑器插件报错，故而使用了@ts-ignore，因为浏览器运行无误
         */
        // @ts-ignore
        instance.parent.ctx.setCurrrentValue(props.option.value, thisKey);
      }

      if (props.border && state.radioState) {
        TRadioRef.value.style.borderColor = props.activeColor;
        TRadioRef.value.style.color = props.activeColor;
      } else {
        TRadioRef.value.style.borderColor = "";
        TRadioRef.value.style.color = "";
      }

      // 获取事件源对象
      let el = $event.target as HTMLSpanElement;
      if (el.className.includes("t-radio-button") && state.radioState) {
        el.style.color = "#fff";
      }
    };

    watch(
      () => state.radioState,
      (value) => {
        if (!value) {
          labelRef.value.style.color = "";
        }
      }
    );

    const sizes = {
      big: 18,
      normal: 16,
      small: 14,
    };

    // 计算radio尺寸大小
    const radioSize = computed(() => {
      return sizes[props.size];
    });

    onMounted(() => {
      state.isRadioGroup = instance.parent.type === TRadioGroup;
      if (props.border) {
        TRadioRef.value.addEventListener("click", setRaio);
      }

      if (state.isRadioGroup) {
        parentKey = getParentCurrentKey();

        watch(
          () => parentKey.value,
          (value: any) => {
            state.radioState = thisKey === value;
          }
        );

        state.radioState = thisKey === parentKey.value;

        // 获取父组件的radio样式
        // @ts-ignore
        state.isButton = instance.parent.ctx.radioType === "button";

        if (state.isButton) {
          state.isFirstRadio =
            // @ts-ignore
            thisKey === instance.parent.ctx.firstRadioKey;

          state.isLastRadio =
            // @ts-ignore
            thisKey === instance.parent.ctx.lastRadioKey;
        }
      }
    });

    function getParentCurrentKey() {
      return computed(() => {
        // @ts-ignore
        return instance.parent.ctx.currentKey;
      });
    }

    return { setRaio, radioSize, ...toRefs(state), TRadioRef, labelRef };
  },
});
</script>

<style scoped lang="scss">
.t-radio {
  display: inline-flex;

  &.t-radio-border {
    padding: 10px;
    border: 1px solid #c0c4cc;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  label {
    display: flex;
    align-items: center;

    span {
      cursor: pointer;
      color: inherit;
      transition: background-color 0.3s;

      &.t-radio-button {
        padding: 10px;
        border: 1px solid #c0c4cc;
        margin: 0;
        border-right: none;

        &.t-radio-first-radio {
          border-radius: 4px 0 0 4px;
        }

        &.t-radio-last-radio {
          border-radius: 0 4px 4px 0;
          border-right: 1px solid #c0c4cc;
        }
      }
    }

    .t-radio-instructions {
      position: relative;
      display: inline-block;
      border-radius: 50%;
      border: 1px solid #dcdfe6;
      margin: 0 5px;
      transition: background-color 0.2s;

      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 40%;
        height: 40%;
        top: 50%;
        left: 50%;
        border-radius: inherit;
        transform: translateX(-50%) translateY(-51%);
        background-color: rgb(255, 255, 255);
      }

      &.t-radio-instructions-disabled {
        background-color: #e7e7e7 !important;
      }
    }

    .t-radio-text-disabled {
      color: #c0c4cc;
    }

    .t-radio-inp {
      display: none;
    }
  }
}
</style>