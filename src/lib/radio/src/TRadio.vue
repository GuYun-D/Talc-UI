<template>
  <div class="t-radio">
    <label>
      <span
        @click="setRaio"
        class="t-radio-instructions"
        :class="{ 't-radio-check': modelValue ? true : false }"
      ></span>
      <span @click="setRaio">
        <slot></slot>
      </span>
      <input class="t-radio-inp" type="radio" />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IRadioProps } from "./type";

export default defineComponent({
  name: "t-radio",
  emits: ["update:modelValue"],
  props: {
    modelValue: Boolean,
  },
  setup(props: IRadioProps, { emit }) {
    const setRaio = () => {
      emit("update:modelValue", !props.modelValue);
    };
    return { setRaio };
  },
});
</script>

<style scoped lang="scss">
.t-radio {
  margin: 5px;

  label {
    display: flex;
    align-items: center;

    .t-radio-instructions {
      display: inline-block;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 1px solid #111;
      margin: 0 5px;

      &.t-radio-check{
        background-color: #afa;
      }
    }

    .t-radio-inp {
      opacity: 0;
    }
  }
}
</style>