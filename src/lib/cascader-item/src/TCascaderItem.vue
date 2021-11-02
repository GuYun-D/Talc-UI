<template>
  <div class="t-cascader-item">
    <div class="cascader-left wrapper">
      <div
        @click="leftSelected = item1"
        v-for="item1 in items"
        :key="item1.name"
      >
        {{ item1.name }}
      </div>
    </div>
    <div class="cascader-right wrapper" v-if="rightItems">
      <t-cascader-item :items="rightItems"></t-cascader-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, computed, watch } from "vue";
import { ISelectedItem } from "../../types";

export default defineComponent({
  name: "t-cascader-item",
  props: {
    items: {
      type: Array as PropType<ISelectedItem[]>,
      required: true,
    },
  },
  setup() {
    const leftSelected = ref<ISelectedItem>();
    const rightItems = computed(() => {
      if (leftSelected && leftSelected.value?.children)
        return leftSelected.value.children;
    });
    return { leftSelected, rightItems };
  },
});
</script>

<style scoped lang="scss">
.t-cascader-item {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  .cascader-left {
    border: 1px solid #f04;
    margin-top: -1px;
  }

  .cascader-right {
    margin-top: -1px;
  }
}
</style>