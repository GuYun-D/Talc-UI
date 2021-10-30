<template>
  <div class="t-collapse">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { emitter } from "../../utils";

export default defineComponent({
  name: "t-collapse",
  setup(_, { slots }) {
    const items = slots.default();
    onMounted(() => {
      emitter.on("update:selected", (uid: number) => {
        // console.log(title);
        // items.forEach((item) => {
        //   // @ts-ignore
        //   console.log(item.type.setup());
        // });
        console.log(uid);
      });
    });

    return {};
  },
});
</script>

<style scoped lang="scss">
.t-collapse {
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>