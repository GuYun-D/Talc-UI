<template>
  <div class="explain-container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.explain-container{
  padding: 10px 10px 10px 20px;
  margin: 20px 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-left: 3px solid rgb(185, 185, 185);
}
</style>