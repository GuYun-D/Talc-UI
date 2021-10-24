<template>
  <div class="t-collapse-item">
    <div class="title" @click="isOpen = !isOpen">
      {{ title }}
    </div>
    <div class="content" v-if="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "t-collapse-item",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false);
    return { isOpen };
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