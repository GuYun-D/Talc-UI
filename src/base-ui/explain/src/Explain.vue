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
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background: linear-gradient(to right,rgb(200, 255, 230),rgb(219, 255, 238),#fff);
  
  background-color: rgb(190, 250, 223);
  border-left: 3px solid rgb(79, 192, 141);
}
</style>