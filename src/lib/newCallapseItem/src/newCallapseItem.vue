<template>
  <div class="t-newCallapse-item" :class="titleClass">
    <div class="title" @click="toggleContent" :name="name">
      <template v-if="showIcon">
        <slot name="icon">
          <span
            class="talc t-callapse-openTag"
            :class="[
              {
                'arrow-rotate': isOpen,
              },
              iconClass,
            ]"
          ></span>
        </slot>
      </template>
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
  onMounted,
  computed,
} from "vue";

import { ECallapseDisabled } from "./type";

export default defineComponent({
  name: "t-newCallapse-item",
  props: {
    name: {
      type: String,
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
    collapseDisabled: {
      type: String,
      validator: (value: ECallapseDisabled) => {
        if (ECallapseDisabled[value]) return true;
        console.warn(
          "[CallapseItem Component Warning]: The collapsedisabled property only supports hidden and readonly"
        );
      },
    },
    icon: {
      type: String,
      default: "right-arrow",
    },
  },
  setup(props) {
    const state = reactive({
      isOpen: false,
    });

    /**
     * 依赖获取
     */
    let currentCallapseName = inject<Ref<string>>("currentCallapseName");
    let selectedName = inject<Ref<string>>("selectedName");
    let notAllowNameArr = inject<Ref<string[]>>("notAllowNameArr");

    /**
     * 点击标题显示对应内容
     */
    const toggleContent = () => {
      if (props.collapseDisabled !== undefined) return;
      state.isOpen = !state.isOpen;
    };

    onMounted(() => {
      _changeCallapseItemStatus(selectedName.value === props.name);
    });

    watch(
      () => currentCallapseName.value,
      (value: string) => {
        if (notAllowNameArr.value.includes(props.name)) return;
        _changeCallapseItemStatus(value === props.name);
      }
    );

    function _changeCallapseItemStatus(tag: boolean) {
      state.isOpen = tag;
    }

    const titleClass = computed(() => {
      return props.collapseDisabled !== undefined
        ? `t-callapse-${props.collapseDisabled}`
        : "";
    });

    const iconClass = computed(() => {
      return `ta-${props.icon}`;
    });

    return { ...toRefs(state), toggleContent, titleClass, iconClass };
  },
});
</script>

<style scoped lang="scss">
.t-newCallapse-item {
  cursor: pointer;
  border-top: 1px solid #ccc;

  &.t-callapse-hidden {
    display: none;
  }

  &.t-callapse-readonly {
    background-color: rgb(245, 245, 245);
    cursor: not-allowed;
    color: rgb(195, 195, 195);
  }

  > .title {
    padding: 0 8px;
    min-height: 32px;
    display: flex;
    align-items: center;
    user-select: none;

    .t-callapse-openTag {
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
