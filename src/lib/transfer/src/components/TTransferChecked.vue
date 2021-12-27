<template>
  <div class="t-transfer-input" :class="weapperClasses">
    <span class="talc" :class="full ? 'ta-henggang' : 'ta-zhengque'"></span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { ICheckedProp } from "../types";

export default defineComponent({
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },

    full: Boolean,
  },
  setup(props: ICheckedProp) {
    const weapperClasses = computed(() => {
      return {
        "t-transfer-input-normal": !props.isChecked,
        "t-transfer-input-active": props.isChecked,
      };
    });
    return { weapperClasses };
  },
});
</script>

<style scoped lang="scss">
$gray: #ccc;
$blue: #409eff;
$white: #fff;

.t-transfer-input {
  position: relative;
  width: 16px;
  height: 16px;
  background-color: $white;
  border-radius: 2px;
  border: 1px solid $gray;
  transition: all 300ms;
  cursor: pointer;
  color: $white;
  overflow: hidden;

  span.talc {
    position: absolute;
    left: 0;
    top: 0;
    display: inline-block;
    text-align: center;
    line-height: 16px;
    width: 16px;
    height: 16px;
    font-size: 6px;
    margin-left: -1px;
    top: -1px;
  }

  &.t-transfer-input-active {
    background-color: $blue;
    border-color: $blue;
  }

  &:hover {
    border-color: $blue;
  }
}
</style>