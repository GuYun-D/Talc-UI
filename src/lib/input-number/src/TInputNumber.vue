<template>
  <div class="t-input-number">
    <TInputNumberButton @update:value="updateModelValue"></TInputNumberButton>
    <input type="text" :value="value" />
    <TInputNumberButton
      @update:value="updateModelValue"
      icon="decrease"
    ></TInputNumberButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import TInputNumberButton from "./components/TInputNumberButton.vue";
import { IInputNumberProps, ETag } from "./types";

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
    return { ...toRefs(state), updateModelValue };
  },
});
</script>

<style scoped lang="scss">
.t-input-number {
  border: 1px solid #666;
  display: inline-flex;
  align-items: center;
  input {
    text-align: center;
    outline: none;
    border: none;
  }
}
</style>