<template>
  <div
    class="t-select-input-wrapper"
    :class="{
      'select-focus': isOpen,
    }"
  >
    <input
      ref="selectInputRef"
      type="text"
      class="t-select-input"
      @focus="handleInputFocus"
      @input="handleEntry"
      :placeholder="placeholder"
      :readonly="!searchSelect"
      :value="inputValue"
      :class="{
        't-select-disabled': disabled,
      }"
    />
    <span
      ref="selectIconRef"
      class="t-select-icon talc"
      :class="[iconClass, iconName]"
      @click="clickIcon"
    ></span>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  reactive,
  ref,
  toRefs,
  watch,
  Ref,
} from "vue";
import { ISelectInputProps, EIcon } from "../types";

export default defineComponent({
  emits: ["update:isOpen", "update:clearValue", "update:searchValue"],
  props: {
    placeholder: {
      type: String,
      default: "请选择",
    },
    inputValue: String,
    clearable: Boolean,
    disabled: Boolean,
    searchSelect: Boolean,
  },

  setup(props: ISelectInputProps, { emit }) {
    const selectIconRef = ref<HTMLSpanElement>();
    const selectInputRef = ref<HTMLInputElement>();
    const iconName = ref(EIcon.arrowDown);
    let isOpen = inject<Ref<boolean>>("openStatus");
    const state = reactive({
      iconClass: {},
    });
    /**
     * 输入框聚焦
     */
    const handleInputFocus = () => {
      if (props.disabled) return;
      emit("update:isOpen", {
        open: true,
      });
    };

    /**
     * 监听isOpen的变化
     */
    watch(
      () => isOpen.value,
      (value: boolean) => {
        state.iconClass = _getIconClasses(value);
        if (props.inputValue && props.clearable) {
          iconName.value = EIcon.delete;
        } else {
          iconName.value = EIcon.arrowDown;
        }
      }
    );

    /**
     * 点击icon
     */
    const clickIcon = () => {
      if (iconName.value === EIcon.delete) {
        emit("update:clearValue", "");
        iconName.value = EIcon.arrowDown;
      } else if (iconName.value === EIcon.arrowDown) {
        emit("update:isOpen", {
          open: false,
        });
      }
    };

    /**
     * 输入框输入
     */
    const handleEntry = (event: MouseEvent) => {
      if (!props.searchSelect) return;
      const target = event.target as HTMLInputElement;
      emit("update:searchValue", target.value);
    };

    function _getIconClasses(bool: boolean) {
      return {
        "t-select-icon-rote": bool,
        "t-select-icon-back": !bool,
      };
    }

    return {
      ...toRefs(state),
      handleInputFocus,
      selectIconRef,
      isOpen,
      iconName,
      clickIcon,
      handleEntry,
    };
  },
});
</script>

<style scoped lang="scss">
$mainColor: #ccc;

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(180deg);
  }
}

@keyframes back {
  0% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
.t-select-input-wrapper {
  position: relative;
  box-sizing: border-box;
  width: 240px;
  height: 40px;
  border: 1px solid $mainColor;
  border-radius: 4px;
  transition: all 300ms;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    border-color: rgb(141, 141, 141);
  }

  &.select-focus {
    border-color: #409eff;
    box-shadow: 0 0 1px #409eff;
  }

  > input {
    width: 100%;
    height: 100%;
    padding: 10px 30px 10px 10px;
    border: none;
    color: #3f3f3f;
    outline: none;
    outline-offset: 0;
    cursor: pointer;

    &.t-select-disabled {
      cursor: not-allowed;
      background-color: #f1f1f1;
    }
  }

  > .t-select-icon {
    position: absolute;
    top: 12px;
    right: 10px;
    color: $mainColor;

    &.t-select-icon-rote {
      animation: rotate 200ms forwards;
      color: #409eff;
    }

    &.t-select-icon-back {
      animation: back 200ms forwards;
    }
  }
}
</style>