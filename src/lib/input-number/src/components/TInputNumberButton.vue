<template>
  <div
    class="t-input-number-button"
    :class="{
      't-inpur-number-decrease': icon == 'decrease',
      't-input-number-button-disabled': disabled,
    }"
    @click="btnClick"
    @mousemove="mouseOp(EMouseTag.enter)"
    @mouseleave="mouseOp(EMouseTag.out)"
  >
    <span
      class="talc"
      :class="{
        'ta-zengjia': icon === 'add',
        'ta-jian': icon === 'decrease',
      }"
    ></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { EMouseTag, IInputButtonProps } from "../types";

export default defineComponent({
  name: "t-input-number-button",
  emits: ["update:value", "change:border"],
  props: {
    icon: {
      type: String,
      default: "add",
    },
    disabled: Boolean,
  },
  setup(props: IInputButtonProps, { emit }) {
    const btnClick = () => {
      emit("update:value", props.icon);
    };

    const mouseOp = (tag: EMouseTag) => {
      emit("change:border", { type: "btn", tag: tag });
    };
    return { btnClick, mouseOp, EMouseTag };
  },
});
</script>

<style scoped lang="scss">
.t-input-number-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  border-right: 1px solid #b1b1b1;

  &.t-inpur-number-decrease {
    border: none;
    border-left: 1px solid #b1b1b1;
  }

  &.t-input-number-button-disabled {
    background-color: #eaeaea;
    cursor: not-allowed;
    color: #c5c5c5;
  }

}
</style>