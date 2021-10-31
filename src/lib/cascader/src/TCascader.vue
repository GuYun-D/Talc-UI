<template>
  <div class="t-cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="item in dataSource" :key="item.name">
        <t-cascader-item :sourceItem="item"></t-cascader-item>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "t-cascader",
  props: {
    "data-source": {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
@import url("../../scss/var");
.t-cascader {
}
</style>