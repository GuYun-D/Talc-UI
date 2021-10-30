<template>
  <div class="t-collapse-item" :name="name">
    <div class="title" @click="toggleCollapse">
      {{ title }}
    </div>
    <div class="content" v-show="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { emitter } from "../../utils";
import { ICollapseUpdateIsopen } from "../../types";

export default defineComponent({
  name: "t-collapse-item",
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const isOpen = ref(false);
    const toggleCollapse = () => {
      if (!isOpen.value) {
        isOpen.value = true;
        emitter.emit("update:selected", props.name);
      } else {
        isOpen.value = false;
      }
    };

    emitter.on("update:isopen", (updatedInfo: ICollapseUpdateIsopen) => {
      if (props.name === updatedInfo.name) {
        isOpen.value = updatedInfo.isSelected;
      } else {
        isOpen.value = updatedInfo.isSelected;
      }
    });
    return { toggleCollapse, isOpen };
  },
});
</script>

<style scoped lang="scss">
.t-collapse-item {
  > .title {
    padding: 0 8px;
    border: 1px solid #ccc;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: beige;
  }

  &:first-child {
    > .title {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }

  &:last-child {
    margin-bottom: -1px;
    > .title {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }

  > .content {
    padding: 5px;
  }
}
</style>