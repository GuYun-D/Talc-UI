<template>
  <div class="t-newCallapse-item" :name="name">
    <div class="title" @click="toggleContent">
      <span
        class="talc ta-right-arrow"
        :class="{ 'arrow-rotate': isOpen }"
      ></span>
      {{ title }}
    </div>

    <div class="content" v-show="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { AllType } from "../../radio/src/type";

export default defineComponent({
  name: "t-newCallapse-item",
  props: {
    name: {
      type: AllType,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      isOpen: false,
    });

    /**
     * 点击标题显示对应内容
     */
    const toggleContent = () => {
      state.isOpen = !state.isOpen;
    };

    return { ...toRefs(state), toggleContent };
  },
});
</script>

<style scoped lang="scss">
.t-newCallapse-item {
  border-top: 1px solid #ccc;

  > .title {
    padding: 0 8px;
    min-height: 32px;
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;

    .ta-right-arrow {
      margin-right: 5px;
      transition: all 0.5s;

      &.arrow-rotate {
        transform: rotate(90deg);
      }
    }
  }

  > .content {
    padding: 5px 8px;
  }
}
</style>