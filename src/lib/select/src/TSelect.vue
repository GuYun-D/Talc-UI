<template>
  <div class="t-select" v-focus>
    <t-select-input :placeHolder="placeHolder"></t-select-input>
    <t-select-menu :data="data"></t-select-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TSelectInput, TSelectMenu } from "./components";
import focus from "./directives/focus";

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
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.t-select {
  position: relative;
  width: 300px;
}
</style>