<template>
  <div class="t-radio" v-radio:[activeColor]="radioState">
    <label>
      <span
        :class="{ 't-radio-instructions-disabled': disabled }"
        :style="{
          width: radioSize + 'px',
          height: radioSize + 'px',
        }"
        @click="setRaio"
        class="t-radio-instructions"
      ></span>
      <span @click="setRaio" :class="{ 't-radio-text-disabled': disabled }">
        {{ option.label }}
      </span>
      <input class="t-radio-inp" type="radio" :disabled="disabled" />
    </label>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import { IRadioProps, ERadioSizeType, IOptionProp, AllType } from "./type";
import { radio } from "./directives";

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
  },
  directives: {
    radio,
  },
  setup(props: IRadioProps, { emit }) {
    let radioState = ref(false);

    const setRaio = () => {
      if (props.disabled) return;
      radioState.value = !radioState.value;
      let checkedValue = radioState.value ? props.option.value : "";
      emit("update:modelValue", checkedValue);
    };

    const sizes = {
      big: 18,
      normal: 16,
      small: 14,
    };

    const radioSize = computed(() => {
      return sizes[props.size];
    });

    return { setRaio, radioSize, radioState };
  },
});
</script>

<style scoped lang="scss">
.t-radio {
  margin: 5px;
  display: inline-flex;

  label {
    display: flex;
    align-items: center;

    .t-radio-instructions {
      position: relative;
      display: inline-block;
      border-radius: 50%;
      border: 1px solid #dcdfe6;
      margin: 0 5px;
      transition: background-color 0.3s;

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
      opacity: 0;
    }
  }
}
</style>