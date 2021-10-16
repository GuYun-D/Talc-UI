<template>
  <div class="t-layout" :class="layoutClasses" ref="layoutRef">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "t-layout",
  setup() {
    const layoutRef = ref();
    const layoutClasses = ref({
      "has-sider": false,
    });
    onMounted(() => {
      for (let i = 0; i < layoutRef.value.children.length; i++) {
        const classList = layoutRef.value.children[i].className.split(" ");
        if (classList.includes("t-sider")) {
          layoutClasses.value["has-sider"] = true;
        }
      }
    });
    return { layoutRef, layoutClasses };
  },
});
</script>

<style scoped lang="scss">
.t-layout {
  display: flex;
  flex-direction: column;

  &.has-sider {
    flex-direction: row;
  }
}
</style>