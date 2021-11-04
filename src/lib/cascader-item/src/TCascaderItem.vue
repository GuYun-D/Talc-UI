<template>
  <div class="t-cascader-item">
    <!-- <div>selected:{{ selected }}</div>
    <div>level:{{ level }}</div> -->
    <div class="cascader-left wrapper">
      <div
        @click="onSelected(item1)"
        v-for="item1 in items"
        :key="item1.name"
        class="label t-clearfix"
      >
        <div class="t-left">{{ item1.name }}</div>
        <t-icon class="arrow t-right" icon="right-arrow" v-if="item1.children">
          >
        </t-icon>
      </div>
    </div>
    <div class="cascader-right wrapper" v-if="rightItems">
      <t-cascader-item
        :selected="selected"
        @update:cascader-selected="onUpdateSelected"
        :level="level + 1"
        :items="rightItems"
      ></t-cascader-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, computed, watch } from "vue";
import { ISelectedItem } from "../../types";

export default defineComponent({
  name: "t-cascader-item",
  emits: ["update:cascader-selected"],
  props: {
    items: {
      type: Array as PropType<ISelectedItem[]>,
      required: true,
    },
    selected: {
      type: Array,
      default: () => [],
    },
    level: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const rightItems = computed(() => {
      let currentSelected: ISelectedItem = props.selected[props.level];
      if (currentSelected && currentSelected.children)
        return currentSelected.children;
    });

    const onSelected = (item: ISelectedItem) => {
      let copySelected = JSON.parse(JSON.stringify(props.selected));
      copySelected[props.level] = item;
      copySelected.splice(props.level + 1);
      emit("update:cascader-selected", copySelected);
    };

    const onUpdateSelected = (newSelected: ISelectedItem) => {
      emit("update:cascader-selected", newSelected);
    };

    return { rightItems, onSelected, onUpdateSelected };
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
  cursor: pointer;

  .cascader-left {
    height: 100%;
    padding: 0.5em 0;
    white-space: nowrap;

    .label {
      padding: 0.5em 1em;
      transition: all 300ms;
      width: 135px;
      &:hover {
        background-color: rgba(115, 255, 192, 0.2);
      }

      .arrow {
        vertical-align: middle;
        font-size: 12px;
        margin-top: 5px;
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