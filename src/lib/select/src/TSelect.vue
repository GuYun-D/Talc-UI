<template>
  <div class="t-select" v-focus>
    <t-select-input
      :placeHolder="placeHolder"
      :inputValue="inputValue"
      @searchOptions="searchOptions"
    ></t-select-input>
    <t-select-menu
      :searchValue="searchValue"
      :data="data"
      @setItemValue="setItemValue"
    ></t-select-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { TSelectInput, TSelectMenu } from "./components";
import focus from "./directives/focus";
import { IMenuDataItem } from "./types";

export default defineComponent({
  name: "t-select",
  props: {
    placeHolder: String,
    data: Array,
  },
  directives: {
    focus,
  },
  components: {
    TSelectInput,
    TSelectMenu,
  },
  setup(_, { emit }) {
    const state = reactive({
      inputValue: "",
      searchValue: "",
    });
    const setItemValue = (item: IMenuDataItem) => {
      state.inputValue = item.value;
      emit("setItemValue", item);
    };

    const searchOptions = (value: string) => {
      state.searchValue = value;
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