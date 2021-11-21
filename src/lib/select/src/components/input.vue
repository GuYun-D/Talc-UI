<template>
  <div class="t-selec-input">
    <label
      class="t-placeHolder"
      ref="inputPlaceholderRef"
      @click="TSelectPlaceholderClick"
      >{{ placeHolder }}</label
    >
    <input
      ref="tSelectInputRef"
      type="text"
      :value="inputValue"
      :readonly="readonly"
      class="t-select-inner-input"
      @input="searchOptions($event)"
      @focus="searchOptions($event)"
      @blur="inputBlur"
      @keyup.enter="confirm"
      @keyup.down="selectItem('addition')"
      @keyup.up="selectItem('subtraction')"
    />
    <span ref="inputIconRef" class="talc ta-xiajiantou"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { ITSelectInputProps } from "../types";
import { emitter } from "../../../utils";

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
    const inputPlaceholderRef = ref<HTMLLabelElement>();
    const inputIconRef = ref<HTMLSpanElement>();

    const TSelectPlaceholderClick = () => {
      tSelectInputRef.value.focus();
    };

    const searchOptions = (e: Event) => {
      inputPlaceholderRef.value.style.display = "none";
      if (tSelectInputRef.value.readOnly) {
        inputIconRef.value.className = "talc ta-xiangshangjiantou";
      } else {
        inputIconRef.value.className = "talc ta-31sousuo";
      }

      setTimeout(() => {
        emitter.emit("menu:visible", "show");
      }, 200);
      emit("searchOptions", (e.target as HTMLInputElement).value);
    };

    const inputBlur = () => {
      setTimeout(() => {
        inputIconRef.value.className = "talc ta-xiajiantou";
        emitter.emit("menu:visible", "hidden");
      }, 200);
    };

    const confirm = () => {
      emitter.emit("menu:confirm");
    };

    const selectItem = (opTag: string) => {
      emitter.emit("menu:select", opTag);
    };

    onMounted(() => {});

    return {
      TSelectPlaceholderClick,
      tSelectInputRef,
      searchOptions,
      confirm,
      selectItem,
      inputPlaceholderRef,
      inputIconRef,
      inputBlur,
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