<template>
  <div class="t-newCallapse-item">
    <div class="title" @click="toggleContent" :name="name">
      <span
        v-if="showIcon"
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
import {
  defineComponent,
  reactive,
  toRefs,
  inject,
  watch,
  Ref,
  getCurrentInstance,
} from "vue";
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
    showIcon: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const instance = getCurrentInstance();
    const state = reactive({
      isOpen: false,
    });
    let currentCallapseName = inject<Ref<string>>("currentCallapseName");
    let parentProps = instance.parent.props;

    /**
     * 点击标题显示对应内容
     */
    const toggleContent = () => {
      if (parentProps.single) return;
      state.isOpen = !state.isOpen;
    };

    watch(
      () => currentCallapseName.value,
      (value: string) => {
        _changeCallapseItemStatus(value === props.name);
      }
    );

    function _changeCallapseItemStatus(tag: boolean) {
      state.isOpen = tag;
    }

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