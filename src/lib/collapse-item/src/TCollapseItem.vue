<template>
  <div class="t-collapse-item" :name="name" :class="collapseDisabledClass">
    <div class="title" @click="toggleCollapse">
      {{ title }}
    </div>
    <div class="content" v-show="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
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
      type: [String, Number],
      required: true,
    },
    "collapse-disabled": {
      type: String,
      default: "none",
      validator: (value: string) => {
        return ["disable", "hidden", "none"].includes(value);
      },
    },
  },
  setup(props) {
    const isOpen = ref(false);
    const toggleCollapse = () => {
      // @ts-ignore
      if (!isOpen.value && props.collapseDisabled !== "disabled") {
        isOpen.value = true;
        emitter.emit("update:selected", props.name);
      } else {
        isOpen.value = false;
      }
    };

    const collapseDisabledClass = computed(() => {
      // @ts-ignore
      if (props.collapseDisabled === "none") return;
      // @ts-ignore
      return `collapse-${props.collapseDisabled}`;
    });

    emitter.on("update:isopen", (updatedInfo: ICollapseUpdateIsopen) => {
      if (props.name === updatedInfo.name) {
        isOpen.value = true;
      } else {
        isOpen.value = false;
      }
    });
    return { toggleCollapse, isOpen, collapseDisabledClass };
  },
});
</script>

<style scoped lang="scss">
.t-collapse-item {
  &.collapse-hidden {
    display: none;
  }
  &.collapse-disabled {
    > .title {
      background-color: #f5f5f5;
      color: #c3c3c3;
      cursor: not-allowed;
    }
  }

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
    user-select: none;
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
    text-indent: 2em;
  }
}
</style>