<template>
  <div class="t-tab-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import emitter from "../../tabs/src/tabs";

export default defineComponent({
  name: "t-tab-pane",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const active = ref(false);
    const classes = computed(() => {
      return {
        active: active.value,
      };
    });
    emitter.on("update:selected", (name: string) => {
      // if (name == props.name) {
      //   console.log(`pane-----------我${props.name}被选中了`);
      // } else {
      //   console.log(`pane-----------我${props.name}没有选中`);
      // }
      active.value = name === props.name;
    });

    return { classes, active };
  },
});
</script>

<style lang="scss" scoped>
.t-tab-pane {
  &.active{
    background-color: chocolate;
  }
}
</style>