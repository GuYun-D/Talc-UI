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
import { IInputNumberProps, ETag, EMouseTag, IMouseInfo } from "./types";

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
  },
  components: {
    TInputNumberButton,
  },
  setup(props: IInputNumberProps, { emit }) {
    const state = reactive({
      value: props.modelValue,
      borderVisible: false,
      isFocus: false,
    });

    const updateModelValue = (tag: string) => {
      if (props.disabled) return;
      switch (tag) {
        case ETag.add:
          state.value = state.value + props.step;
          emit("update:modelValue", state.value);
          break;

        case ETag.decrease:
          state.value = state.value - props.step;
          emit("update:modelValue", state.value);
          break;
      }
    };

    const changeBorder = (mouseInfo: IMouseInfo) => {
      if (state.value !== props.modelValue) {
        emit("update:modelValue", +state.value);
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

    function changeRootShadow(tag: EMouseTag) {
      state.borderVisible = tag === EMouseTag.enter;
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