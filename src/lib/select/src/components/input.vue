<template>
  <div class="t-selec-input">
    <label class="t-placeHolder" @click="TSelectPlaceholderClick">{{
      placeHolder
    }}</label>
    <input
      ref="tSelectInputRef"
      type="text"
      :value="inputValue"
      class="t-select-inner-input"
      @input="searchOptions($event)"
    />
    <span class="talc ta-xiajiantou"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "t-selec-input",
  props: {
    placeHolder: {
      type: String,
      default: "请选择",
    },

    inputValue: String,
  },
  setup(props, { emit }) {
    const tSelectInputRef = ref<HTMLInputElement>();
    const TSelectPlaceholderClick = () => {
      tSelectInputRef.value.focus();
    };

    const searchOptions = (e: Event) => {
      emit("searchOptions", (e.target as HTMLInputElement).value);
    };
    return { TSelectPlaceholderClick, tSelectInputRef, searchOptions };
  },
});
</script>

<style scoped lang="scss">
.t-selec-input {
  position: relative;
  width: 100%;
  height: 38px;

  .t-placeHolder {
    position: absolute;
    left: 15px;
    top: 8px;
    color: #999;
    cursor: text;
  }

  .talc {
    position: absolute;
    right: 15px;
    top: 12px;
    color: #999;

    &.ta-31sousuo {
      font-size: 22px;
      top: 8px;
    }
  }

  .t-select-inner-input {
    width: 100%;
    height: 100%;
    padding: 0 15px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #999;
    border-radius: 5px;
    outline: none;
    transition: all 0.2s linear;

    &:focus {
      border-color: #1890ff;
      box-shadow: 0 0 3px #1890ff;
    }
  }
}
</style>