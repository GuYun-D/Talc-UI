<template>
  <div
    class="col"
    :class="[`col-${span}`, offset && `offset-${offset}`]"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.col {
  width: 50%;
  height: 100px;
  background-color: rgb(235, 137, 8);
  border: 1px solid red;
  box-sizing: border-box;

  $class: col-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n / 24) * 100%;
    }
  }

  $class-lleft: offset-;
  @for $i from 1 through 24 {
    &.#{$class-lleft}#{$i} {
      margin-left: ($i / 24) * 100%;
    }
  }
}
</style>