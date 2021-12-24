<template>
  <div class="t-select">
    <t-select-input
      @update:isOpen="changeOpen"
      @update:clearValue="clearModelValue"
      @update:searchValue="searchKey = $event"
      :inputValue="modelValue"
      :clearable="clearable"
      :disabled="disabled"
      :searchSelect="searchSelect"
    ></t-select-input>
    <t-select-menu
      :value="modelValue"
      :data="data"
      :searchKey="searchKey"
      @chooice:menu="chooiceMenu"
      :searchFilterDisabled="searchFilterDisabled"
    ></t-select-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide, PropType } from "vue";
import TSelectInput from "./components/TSelectInput.vue";
import TSelectMenu from "./components/TSelectMenu.vue";
import { IData, IOpenInfo } from "./types";

export default defineComponent({
  name: "t-select",
  emits: ["update:modelValue"],
  components: {
    TSelectInput,
    TSelectMenu,
  },
  props: {
    placeholder: {
      type: String,
      default: "请选择",
    },

    data: {
      type: Array as PropType<IData[]>,
      required: true,
    },

    modelValue: String,

    clearable: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    searchSelect: {
      type: Boolean,
      default: false,
    },
    searchFilterDisabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(_, { emit }) {
    const isOpen = ref(false);
    const searchKey = ref("");

    const changeOpen = (openInfo: IOpenInfo) => {
      _changeOpenStatus(openInfo.open);
      if (openInfo.open) {
        document.addEventListener("click", _listerDocumentClick, false);
      } else {
        document.removeEventListener("click", _listerDocumentClick, false);
      }
    };

    const chooiceMenu = (item: IData) => {
      emit("update:modelValue", item.value);
    };

    /**
     * 重置
     */
    const clearModelValue = () => {
      emit("update:modelValue", "");
    };

    /**
     * 依赖注入
     */
    provide("openStatus", isOpen);

    function _listerDocumentClick(e: MouseEvent) {
      let target = e.target as Element;
      const classList: string[] = Array.prototype.slice.call(target.classList);
      if (
        classList.includes("t-select-menu-ul") ||
        classList.includes("t-select-menu") ||
        classList.includes("t-select-input") ||
        classList.includes("t-select-item-disabled") ||
        classList.includes("t-select-none")
      ) {
        isOpen.value = true;
      } else {
        isOpen.value = false;
        document.removeEventListener("click", _listerDocumentClick, false);
      }
    }

    /**
     * 统一修改当前isOpen的状态
     */
    function _changeOpenStatus(tag: boolean) {
      isOpen.value = tag;
    }

    return {
      isOpen,
      changeOpen,
      chooiceMenu,
      clearModelValue,
      searchKey,
    };
  },
});
</script>

<style scoped lang="scss">
</style>