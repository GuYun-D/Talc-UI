<template>
  <div
    class="t-input-number-button"
    :class="{ 't-inpur-number-decrease': icon == 'decrease' }"
  >
    <span
      class="talc"
      :class="{
        'ta-zengjia': icon === 'add',
        'ta-jian': icon === 'decrease',
      }"
      @click="btnClick"
    ></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "t-input-number-button",
  emits: ["update:value"],
  props: {
    icon: {
      type: String,
      default: "add",
    },
  },
  setup(props, { emit }) {
    const btnClick = () => {
      emit("update:value", props.icon);
    };
    return { btnClick };
  },
});
</script>

<style scoped lang="scss">
.t-input-number-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 100%;
  cursor: pointer;
  border-right: 1px solid #666;

  &.t-inpur-number-decrease {
    border: none;
    border-left: 1px solid #666;
  }
}
</style>