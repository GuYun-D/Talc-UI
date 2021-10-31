<template>
  <div class="t-cascader-item">
    {{ sourceItem.name }}
    <t-cascader-item
      v-for="item in sourceItem.children"
      :sourceItem="item"
      :key="item.name"
    ></t-cascader-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "t-cascader-item",
  props: {
    sourceItem: {
      type: Object,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.t-cascader-item{
  border: 1px solid #f40;
  padding: 10px;
}
</style>