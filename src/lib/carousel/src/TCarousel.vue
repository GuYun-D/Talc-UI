<template>
  <div class="t-carousel">
    <div class="t-carousel-window">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "t-carousel",
  provide(){
    return {
    }
  },
  setup(props, { slots }) {
    const childrens = slots.default();
    onMounted(() => {
      // @ts-ignore
      childrens[0].type.setup().visible.value = true;
      // @ts-ignore
      console.log(childrens[0].type.setup().visible.value);
    });
    return {};
  },
});
</script>

<style scoped>
</style>