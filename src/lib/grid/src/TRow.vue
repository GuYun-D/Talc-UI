<template>
  <!-- <div
    class="row"
    :style="{ marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }"
  > -->
  <div
    class="row"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted } from "vue";

export default defineComponent({
  props: {
    gutter: {
      type: [Number, String],
      default: 0,
    },
  },
  setup(props) {
    // let gutter = props.gutter;
    // onMounted(() => {
    //   const instance = getCurrentInstance();
    //   for (let i = 0; i < instance.proxy.$el.children.length; i++) {
    //     instance.proxy.$el.children[i].style.paddingLeft = +gutter / 2 + "px";
    //     instance.proxy.$el.children[i].style.paddingRight = +gutter / 2 + "px";
    //   }
    // });
    // return {};
  },
});
</script>

<style scoped lang="scss">
.row {
  display: flex;
  box-sizing: border-box;
}
</style>