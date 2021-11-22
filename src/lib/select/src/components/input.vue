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
    <span
      ref="inputIconRef"
      class="talc"
      :class="{ 'ta-delete': clearable, 'ta-xiajiantou': !clearable }"
      @click="talcIconClick"
    ></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, reactive, ref } from "vue";
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
    clearable: Boolean,
  },
  setup(props: ITSelectInputProps, { emit }) {
    const tSelectInputRef = ref<HTMLInputElement>();
    const inputPlaceholderRef = ref<HTMLLabelElement>();
    const inputIconRef = ref<HTMLSpanElement>();
    const state = reactive({
      menuVisible: false,
    });

    const TSelectPlaceholderClick = () => {
      tSelectInputRef.value.focus();
    };

    const searchOptions = async (e: Event) => {
      inputPlaceholderRef.value.style.display = "none";
      if (tSelectInputRef.value.readOnly) {
        inputIconRef.value.className = "talc ta-xiangshangjiantou";
      } else {
        inputIconRef.value.className = "talc ta-31sousuo";
      }
      emit("searchOptions", (e.target as HTMLInputElement).value);

      await nextTick();
      emitter.emit("menu:visible", "show");
    };

    const inputBlur = () => {
      setInputBlur();
    };

    /**
     * 用户点击enter键，发送事件给menu
     */
    const confirm = () => {
      emitter.emit("menu:confirm");
      siderBlur();
    };

    /**
     * 输入框失去焦点的操作
     */
    function setInputBlur() {
      setTimeout(() => {
        siderBlur();
      }, 200);
    }

    /**
     * 失去焦点
     */
    async function siderBlur() {
      if (state.menuVisible === true) {
        tSelectInputRef.value.focus();
        return;
      }

      props.clearable
        ? (inputIconRef.value.className = "talc ta-delete")
        : (inputIconRef.value.className = "talc ta-xiajiantou");

      emitter.emit("menu:visible", "hidden");
      tSelectInputRef.value.blur();

      await nextTick();
      if (tSelectInputRef.value.value === "") {
        inputPlaceholderRef.value.style.display = "block";
      }
    }

    /**
     * 用户使用键盘进行上下选择，发送事件给menu组件，做出相应操作
     * @param opTag 上键还是下键
     */
    const selectItem = (opTag: string) => {
      emitter.emit("menuKey:select", opTag);
    };

    onMounted(() => {
      emitter.on("menu:close", (tag: boolean) => {
        state.menuVisible = tag;
      });
    });

    /**
     * 点击图标
     */
    const talcIconClick = (e: MouseEvent) => {
      let eventEl = e.target as HTMLSpanElement;
      const iconClassNameArr: string[] = Array.prototype.slice.call(
        eventEl.classList
      );
      if (iconClassNameArr.includes("ta-delete")) {
        emit("clear:inputValue");
        inputPlaceholderRef.value.style.display = "block";
      }
    };

    return {
      TSelectPlaceholderClick,
      tSelectInputRef,
      searchOptions,
      confirm,
      selectItem,
      inputPlaceholderRef,
      inputIconRef,
      inputBlur,
      talcIconClick,
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
    cursor: pointer;

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
    cursor: pointer;

    &:focus {
      border-color: $border;
      box-shadow: 0 0 3px $border;
    }
  }
}
</style>