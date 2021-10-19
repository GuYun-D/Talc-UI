<template>
  <div class="t-tab-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import emitter from "../../tabs/src/tabs";
import { IEmitter } from "../../tabs/src/types";


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
    emitter.on("update:selected", (obj: IEmitter) => {
      // active.value = name === props.name;

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