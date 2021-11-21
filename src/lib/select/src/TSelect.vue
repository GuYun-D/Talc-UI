<template>
  <div class="t-select" :style="{ width: width + 'px' }">
    <t-select-input
      :placeHolder="placeHolder"
      :inputValue="inputValue"
      @searchOptions="searchOptions"
      :readonly="searchData ? false : true"
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
import { defineComponent, reactive, toRefs } from "vue";
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


    return { setItemValue, ...toRefs(state), searchOptions };
  },
});
</script>

<style scoped lang="scss">
.t-select {
  position: relative;
  width: 300px;
}
</style>