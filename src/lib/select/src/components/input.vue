<template>
  <div class="t-selec-input">
    <label class="t-placeHolder" @click="TSelectPlaceholderClick">{{
      placeHolder
    }}</label>
    <input
      ref="tSelectInputRef"
      type="text"
      :value="inputValue"
      :readonly="readonly"
      class="t-select-inner-input"
      @input="searchOptions($event)"
      @focus="searchOptions($event)"
    />
    <span class="talc ta-xiajiantou"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ITSelectInputProps } from "../types";

export default defineComponent({
  name: "t-selec-input",
  props: {
    placeHolder: {
      type: String,
      default: "请选择",
    },

    inputValue: String,
    readonly: Boolean,
  },
  setup(props: ITSelectInputProps, { emit }) {
    const tSelectInputRef = ref<HTMLInputElement>();
    const TSelectPlaceholderClick = () => {
      tSelectInputRef.value.focus();
    };

    const searchOptions = (e: Event) => {
      emit("searchOptions", (e.target as HTMLInputElement).value);
    };

    return {
      TSelectPlaceholderClick,
      tSelectInputRef,
      searchOptions,
    };
  },
});
</script>

<style scoped lang="scss">
$textColor: #999;
$border: #1890ff;

.t-selec-input {
  position: relative;
  width: 100%;
  height: 38px;

  .t-placeHolder {
    position: absolute;
    left: 15px;
    top: 8px;
    color: $textColor;
    cursor: text;
  }

  .talc {
    position: absolute;
    right: 15px;
    top: 12px;
    color: $textColor;

    &.ta-31sousuo {
      font-size: 22px;
      top: 8px;
    }
  }

  .t-select-inner-input {
    width: 100%;
    height: 100%;
    color: #666;
    padding: 0 15px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid $textColor;
    border-radius: 5px;
    outline: none;
    transition: all 0.2s linear;

    &:focus {
      border-color: $border;
      box-shadow: 0 0 3px $border;
    }
  }
}
</style>