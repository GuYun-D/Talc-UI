<template>
  <div
    class="t-input-number"
    :class="{ 't-input-number-border': borderVisible }"
  >
    <TInputNumberButton
      @change:border="changeBorder"
      @update:value="updateModelValue"
    ></TInputNumberButton>
    <input
      type="text"
      :value="value"
      @focus="changeBorder({ type: 'input', tag: 'enter' })"
      @blur="changeBorder({ type: 'input', tag: 'out' })"
    />
    <TInputNumberButton
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
      switch (tag) {
        case ETag.add:
          emit("update:modelValue", ++state.value);
          break;

        case ETag.decrease:
          emit("update:modelValue", --state.value);
          break;
      }
    };

    const changeBorder = (mouseInfo: IMouseInfo) => {
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
  border: 1px solid #666;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s;

  &.t-input-number-border {
    box-shadow: 0 0 1px #409eff;
    border-color: #409eff;
  }

  input {
    text-align: center;
    outline: none;
    border: none;
  }
}
</style>