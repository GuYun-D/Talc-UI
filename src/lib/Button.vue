<template>
  <div :size="size">
    <!-- 
      将所有属性全部绑定到button属性上
      <button v-bind="$attr">
        <slot />
      </button>
    -->
    <button v-bind="rest">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  // 取消属性继承
  inheritAttrs: false,

  // 属性分两部分
  setup(props, context) {
    const { size, ...rest } = context.$attrs;

    return { size, rest };
  },
};
</script>

<style lang="scss" scoped>
</style>