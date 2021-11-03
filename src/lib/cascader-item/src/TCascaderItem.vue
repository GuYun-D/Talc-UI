<template>
  <div class="t-cascader-item">
    <div class="cascader-left wrapper">
      <div
        @click="leftSelected = item1"
        v-for="item1 in items"
        :key="item1.name"
        class="label"
      >
        {{ item1.name }}
        <t-icon class="arrow" icon="right-arrow" v-if="item1.children">
          >
        </t-icon>
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
  overflow: hidden;
  color: rgb(94, 92, 92);

  .cascader-left {
    height: 100%;
    padding: 0.3em 0;
    white-space: nowrap;

    .label {
      padding: 0.3em 1em;

      .arrow {
        vertical-align: middle;
        font-size: 12px;
        margin-left: -2px;
      }
    }
  }

  .cascader-right {
    height: 100%;
    white-space: nowrap;
    border-left: 1px solid rgb(224, 224, 224);
  }
}
</style>