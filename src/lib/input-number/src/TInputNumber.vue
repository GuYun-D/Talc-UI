<template>
  <div class="t-input-number">
    <TInputNumberButton></TInputNumberButton>
    <input type="text" />
    <TInputNumberButton icon="decrease"></TInputNumberButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TInputNumberButton from "./components/TInputNumberButton.vue";

export default defineComponent({
  name: "t-input-number",
  components: {
    TInputNumberButton,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.t-input-number {
  border: 1px solid #666;
  display: inline-flex;
  align-items: center;
  input {
    text-align: center;
    outline: none;
    border: none;
  }
}
</style>