<template>
  <div class="t-collapse-item" :name="name">
    <div class="title" @click="toggleCollapse">
      {{ title }}
    </div>
    <div class="content" v-show="false">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from "vue";
import { emitter } from "../../utils";

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
    const toggleCollapse = () => {
      emitter.emit("update:selected", props.name);
    };

    return { toggleCollapse };
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