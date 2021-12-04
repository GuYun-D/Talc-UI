<template>
  <div
    class="t-input-number"
    :class="{
      't-input-number-border': borderVisible,
    }"
  >
    <TInputNumberButton
      :disabled="disabled"
      @change:border="changeBorder"
      @update:value="updateModelValue"
    ></TInputNumberButton>
    <input
      type="text"
      v-model="value"
      :class="{
        't-input-number-disabled': disabled,
      }"
      :readonly="disabled"
      @focus="changeBorder({ type: 'input', tag: 'enter' })"
      @blur="changeBorder({ type: 'input', tag: 'out' })"
    />
    <TInputNumberButton
      :disabled="disabled"
      @update:value="updateModelValue"
      icon="decrease"
      @change:border="changeBorder"
    ></TInputNumberButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import TInputNumberButton from "./components/TInputNumberButton.vue";
import {
  IInputNumberProps,
  ETag,
  EMouseTag,
  IMouseInfo,
  EMaxMin,
} from "./types";

export default defineComponent({
  name: "t-input-number",
  emits: ["update:modelValue"],
  props: {
    modelValue: Number,
    disabled: {
      type: Boolean,
      default: false,
    },
    step: {
      type: Number,
      default: 1,
    },
    stepStrictly: {
      type: Boolean,
      default: false,
    },
    max: {
      type: Number,
      default: null,
    },
    min: {
      type: Number,
      default: null,
    },
  },
  components: {
    TInputNumberButton,
  },
  setup(props: IInputNumberProps, { emit }) {
    const state = reactive({
      value: props.modelValue * 1,
      borderVisible: false,
      isFocus: false,
    });

    limitValue(state.value);

    const updateModelValue = (tag: string) => {
      if (props.disabled) return;
      switch (tag) {
        case ETag.add:
          state.value = state.value * 1 + props.step;
          limitValue(state.value);
          emit("update:modelValue", state.value * 1);
          break;

        case ETag.decrease:
          state.value = state.value * 1 - props.step;
          limitValue(state.value);
          emit("update:modelValue", state.value * 1);
          break;
      }
    };
  

    const changeBorder = (mouseInfo: IMouseInfo) => {
      if (state.value !== props.modelValue) {
        if (props.stepStrictly) {
          state.value = handleStepStrictly(state.value);
          limitValue(state.value);
          emit("update:modelValue", state.value * 1);
        }

        limitValue(state.value);
        emit("update:modelValue", state.value * 1);
      }

      if (mouseInfo.type === "btn") {
        if (!state.isFocus) {
          changeRootShadow(mouseInfo.tag);
        }
      }

      if (mouseInfo.type === "input") {
        state.isFocus = mouseInfo.tag === EMouseTag.enter;
        changeRootShadow(mouseInfo.tag);
      }
    };

    /**
     * 控制外border的显示与隐藏
     */
    function changeRootShadow(tag: EMouseTag) {
      state.borderVisible = tag === EMouseTag.enter;
    }

    /**
     * 当step strictly 是ture时，保证当前value是step的倍数
     * @param  value 原始数值
     * @returns  最终的数值
     */
    function handleStepStrictly(value: number): number {
      let finalNum = 0;
      let result = (value / props.step) * 10;
      let intNum = parseInt(result / 10 + "");
      let flotNum = result % 10;

      if (flotNum && flotNum >= 5) {
        finalNum = (intNum + 1) * props.step;
      }
      finalNum = intNum * props.step;
      return finalNum;
    }

    /**
     * 限制当前的值的范围
     */
    function limitValue(value: number) {
      let res = value;
      if (props.min && value < props.min) {
        res = props.min;
      }
      if (props.max && value > props.max) {
        res = props.max;
      }
      state.value = res;
    }

    return { ...toRefs(state), updateModelValue, changeBorder };
  },
});
</script>

<style scoped lang="scss">
.t-input-number {
  // 高度要加二
  height: 42px;
  border: 1px solid #666;
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  transition: all 0.3s;
  border-radius: 4px;
  overflow: hidden;

  &.t-input-number-border {
    box-shadow: 0 0 1px #409eff;
    border-color: #409eff;
  }

  input {
    text-align: center;
    outline: none;
    border: none;
    height: 100%;

    &.t-input-number-disabled {
      cursor: not-allowed;
      background-color: #eaeaea;
      color: #c5c5c5;
    }
  }
}
</style>