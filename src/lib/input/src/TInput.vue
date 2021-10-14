<template>
  <div class="wrapper" :class="{ error }">
    <input
      class="t-input"
      :class="inpClass"
      :value="value"
      :type="type"
      :readonly="readonly"
      :disabled="disable"
      :placeholder="placeholder"
      ref="inputRef"
      :maxlength="maxLength"
      @change="$emit('change', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      @input="handleValueChange"
    />

    <template v-if="error">
      <div>
        <t-icon icon="delete" class="icon-error"></t-icon>
        <span class="error-msg">{{ error }}</span>
      </div>
    </template>

    <template v-if="prefixIcon">
      <t-icon class="icon" ref="prefixIconRef" :icon="prefixIcon"></t-icon>
    </template>

    <template v-if="isShowSuffixIcon">
      <t-icon
        class="icon"
        ref="suffixIconRef"
        :icon="showIcon"
        @click="clearValue"
        :class="{ point: clearable }"
      ></t-icon>
    </template>

    <template v-if="maxLength">
      <span ref="counterRef" class="counter">
        {{ counter }}/{{ maxLength }}
      </span>
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import TIcon from "../../iconfont/src/TIcon.vue";
import { inputProps } from "./input";

export default defineComponent({
  props: inputProps,

  components: {
    TIcon,
  },

  setup(props, { emit }) {
    const inputRef = ref(null);
    const prefixIconRef = ref<InstanceType<typeof TIcon>>();
    const suffixIconRef = ref<InstanceType<typeof TIcon>>();
    const counterRef = ref(null);
    const counter = ref(0);

    let isShowSuffixIcon = ref(
      props.clearable || props.suffixIcon ? true : false
    );
    let showIcon = ref(props.suffixIcon);
    enum IconLocation {
      head = "prefix",
      end = "suffix",
      counter = "counter",
    }

    const size = props.size;
    const sizeObj = {
      normal: {
        inputHeight: "40",
        font: "16",
      },
      big: {
        inputHeight: "46",
        font: "20",
      },
      mini: {
        inputHeight: "32",
        font: "15",
      },
    };

    const inpClass = computed(() => {
      return {
        [`t-input-${size}`]: size !== "normal",
        [`t-input-shadow`]: props.shadow,
      };
    });

    const calcStyle = (position: string) => {
      let left = null;
      let right = null;
      const el = position === IconLocation.head ? prefixIconRef : suffixIconRef;
      let offset = position === IconLocation.head ? left : right;
      const { width } = el.value.$el.getBoundingClientRect();
      let top = sizeObj[size].inputHeight / 2 - width / 2 - 1 + "px";
      offset = 15 - width / 2 + "px";
      return {
        top,
        offset,
      };
    };

    const handleIcon = (
      iconPosition: string,
      offsetPosition: string,
      inputPadding: string
    ) => {
      let iconComponent =
        iconPosition === IconLocation.head ? prefixIconRef : suffixIconRef;
      const { top, offset } = calcStyle(iconPosition);
      inputRef.value.style[inputPadding] = "30px";
      iconComponent.value.$el.style.fontSize = sizeObj[size].font + "px";
      iconComponent.value.$el.style.top = top;
      iconComponent.value.$el.style[offsetPosition] = offset;
    };

    const handleClearable = () => {
      if (props.clearable) {
        if (props.suffixIcon) {
          console.error("TIcon-Error:clearable和suffixIcon只支持其中一个");
          isShowSuffixIcon.value = false;
          return;
        }

        showIcon.value = "delete";
        handleIcon(IconLocation.end, "right", "paddingRight");
      }
    };

    onMounted(() => {
      handleClearable();
      props.prefixIcon && handleIcon(IconLocation.head, "left", "paddingLeft");
      if (!props.clearable) {
        props.suffixIcon &&
          handleIcon(IconLocation.end, "right", "paddingRight");
      }
    });

    const handleValueChange = (e) => {
      emit("update:value", e.target.value);
    };

    const clearValue = (e) => {
      if (!props.clearable) {
        return;
      }
      inputRef.value.focus();
      emit("update:value", "");
    };

    watch(
      () => props.value,
      (newVal, oldVal) => {
        counter.value = newVal.length;
      }
    );

    return {
      handleValueChange,
      inpClass,
      inputRef,
      prefixIconRef,
      suffixIconRef,
      isShowSuffixIcon,
      showIcon,
      clearValue,
      counter,
      counterRef,
    };
  },
});
</script>

<style scoped lang="scss">
.wrapper {
  margin: 10px;
  position: relative;

  .icon {
    position: absolute;
  }

  .point {
    cursor: pointer;
  }

  .counter {
    color: #999;
    position: absolute;
    top: 12px;
    right: 10px;
  }

  &.error {
    > input {
      border-color: #f1453d;
      margin-bottom: 4px;

      &.t-input-shadow {
        box-shadow: inset 0 1px 3px #f1453d;
      }

      &:focus {
        border-color: #f1453d;
      }

      &:hover {
        border-color: #f80f03;
      }
    }
  }

  // display: inline-flex;
  align-items: center;

  div {
    height: 30px;
    line-height: 20px;
    margin-left: 10px;
    .error-msg {
      vertical-align: middle;
      color: #f1453d;
      display: inline-block;
      height: 100%;
    }

    .icon-error {
      fill: #f1453d;
    }
  }

  .t-input {
    height: 40px;
    border: 1px solid #999;
    border-radius: 4px;
    padding: 0 8px;
    font-size: 14px;
    width: 100%;

    &.t-input-big {
      height: 46px;
      font-size: 16px;
    }

    &.t-input-mini {
      height: 32px;
      font-size: 12px;
    }

    &:hover {
      border-color: #666;
    }

    &:focus {
      outline: none;
      // box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
    }

    &.t-input-shadow:focus {
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
    }

    &[disabled],
    &[readonly] {
      border-color: #aaa;
      color: #aaa;
      cursor: not-allowed;
    }
  }
}
</style>
