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

    <template v-if="suffixIcon">
      <t-icon class="icon" ref="suffixIconRef" :icon="suffixIcon"></t-icon>
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import TIcon from "../../iconfont/src/TIcon.vue";

export default defineComponent({
  props: {
    value: String,
    disable: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: String,
    placeholder: String,
    type: String,
    size: {
      type: String,
      default: "normal",
    },
    prefixIcon: {
      type: String,
      default: "",
    },
    suffixIcon: {
      type: String,
      default: "",
    },
  },

  components: {
    TIcon,
  },

  setup(props, { emit }) {
    const inputRef = ref(null);
    const prefixIconRef = ref<InstanceType<typeof TIcon>>();
    const suffixIconRef = ref<InstanceType<typeof TIcon>>();
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
      };
    });

    const calcStyle = (position: string) => {
      let left = null;
      let right = null;
      const el = position === "prefix" ? prefixIconRef : suffixIconRef;
      let offset = position === "prefix" ? left : right;
      const { width } = el.value.$el.getBoundingClientRect();
      let top = sizeObj[size].inputHeight / 2 - width / 2 - 1 + 'px';
      offset = 15 - width / 2 + 'px';
      return {
        top,
        offset,
      };
    };

    onMounted(() => {
      if (props.prefixIcon && prefixIconRef.value) {
        const { top, offset } = calcStyle("prefix");
        inputRef.value.style.paddingLeft = "30px";
        prefixIconRef.value.$el.style.fontSize = sizeObj[size].font + "px";
        prefixIconRef.value.$el.style.top = top;
        prefixIconRef.value.$el.style.left = offset;
      }

      if (props.prefixIcon && suffixIconRef.value) {
        const { top, offset } = calcStyle("suffixIcon");
        inputRef.value.style.paddingRight = "30px";
        suffixIconRef.value.$el.style.fontSize = sizeObj[size].font + "px";
        suffixIconRef.value.$el.style.top = top;
        suffixIconRef.value.$el.style.right = offset;
      }
    });

    const handleValueChange = (e) => {
      emit("update:value", e.target.value);
    };
    return {
      handleValueChange,
      inpClass,
      inputRef,
      prefixIconRef,
      suffixIconRef,
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

  &.error {
    > input {
      border-color: #f1453d;
      box-shadow: inset 0 1px 3px #f1453d;
      margin-bottom: 4px;

      &:focus {
        border-color: #f1453d;
        box-shadow: inset 0 1px 3px #f1453d;
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
