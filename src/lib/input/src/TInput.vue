<template>
  <div class="wrapper" :class="{ error }">
    <input
      class="t-input"
      :value="value"
      type="text"
      :readonly="readonly"
      :disabled="disable"
    />

    <template v-if="error">
      <t-icon icon="delete" class="icon-error"></t-icon>
      <span class="error-msg">{{ error }}</span>
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
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
  },

  components: {
    TIcon,
  },

  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.wrapper {
  &.error {
    > input {
      border-color: #f1453d;
      box-shadow: inset 0 1px 3px #f1453d;

      &:focus {
        border-color: #f1453d;
        box-shadow: inset 0 1px 3px #f1453d;
      }

      &:hover{
        border-color: #f80f03;
      }
    }
  }

  display: inline-flex;
  align-items: center;

  .error-msg {
    vertical-align: middle;
    color: #f1453d;
  }

  .icon-error {
    fill: #f1453d;
  }

  .t-input {
    height: 32px;
    border: 1px solid #999;
    border-radius: 4px;
    padding: 0 8px;
    font-size: 14px;
    margin: 10px;

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
