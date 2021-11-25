<template>
  <div class="t-select" :style="{ width: width + 'px' }">
    <t-select-input
      :placeHolder="placeHolder"
      :inputValue="inputValue"
      :readonly="searchData ? false : true"
      :clearable="clearable"
      :disabled="disabled"
      @clear:inputValue="clearInputValue"
      @searchOptions="searchOptions"
    ></t-select-input>
    <t-select-menu
      :searchValue="searchValue"
      :data="data"
      :inputValue="inputValue"
      @setItemValue="setItemValue"
    ></t-select-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from "vue";
import { TSelectInput, TSelectMenu } from "./components";
import { IMenuDataItem } from "./types";

export default defineComponent({
  name: "t-select",
  props: {
    placeHolder: String,
    data: Array,
    width: [Number, String],
    searchData: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: [String, Array]
    },
  },
  components: {
    TSelectInput,
    TSelectMenu,
  },
  setup(props, { emit }) {
    const state = reactive({
      inputValue: "",
      searchValue: "",
    });
    const setItemValue = (item: IMenuDataItem) => {
      state.inputValue = item.value;
      emit("setItemValue", item);
    };

    const searchOptions = (value: string) => {
      if (props.searchData) {
        state.searchValue = value;
      }
    };

    // 清除值
    const clearInputValue = () => {
      if (state.inputValue === "") return;
      state.inputValue = "";
    };

    /**
     * 监听inputValue的值
     */
    watch(
      () => state.inputValue,
      (value) => {
        emit("update:modelValue", value);
      }
    );

    return { setItemValue, ...toRefs(state), searchOptions, clearInputValue };
  },
});
</script>

<style scoped lang="scss">
.t-select {
  position: relative;
  width: 300px;
}
</style>