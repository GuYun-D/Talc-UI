<template>
  <div class="t-collapse" ref="collapseRef">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { emitter } from "../../utils";

export default defineComponent({
  name: "t-collapse",
  props: {
    selected: String,
    single: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const collapseRef = ref(null);
    onMounted(() => {
      // console.log(collapseRef.value.children[0]);
      emitter.on("update:selected", (name) => {
        const collapseItems = collapseRef.value.children;

        for (let i = 0; i < collapseItems.length; i++) {
          if (collapseItems[i].getAttribute("name") === name) {
            collapseItems[i].children[1].style.display = "block";
          } else if (props.single) {
            collapseItems[i].children[1].style.display = "none";
          }
        }
      });
    });

    return { collapseRef };
  },
});
</script>

<style scoped lang="scss">
.t-collapse {
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>