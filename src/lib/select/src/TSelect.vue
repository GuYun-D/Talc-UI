<template>
  <div class="t-select" v-focus>
    <t-select-input :placeHolder="placeHolder"></t-select-input>
    <t-select-menu :data="data" @setItemValue="setItemValue"></t-select-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
    const setItemValue = (item: IMenuDataItem) => {
      emit("setItemValue", item);
    };
    return { setItemValue };
  },
});
</script>

<style scoped lang="scss">
.t-select {
  position: relative;
  width: 300px;
}
</style>