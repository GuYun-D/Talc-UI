<template>
    <button class="t-button" :class="{[`theme-${theme}`]: theme}">
      <slot />
    </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    theme: {
      type: String,
      default: 'button'
    }
  }
};
</script>

<style lang="scss" scoped>
</style>