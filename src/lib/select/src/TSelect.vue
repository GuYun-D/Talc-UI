<template>
  <div class="t-select" v-focus>
    <t-select-input :placeHolder="placeHolder"></t-select-input>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TSelectInput } from "./components";
import focus from "./directives/focus";

export default defineComponent({
  name: "t-select",
  props: {
    placeHolder: String,
  },
  directives: {
    focus,
  },
  components: {
    TSelectInput,
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