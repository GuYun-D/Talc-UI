<template>
  <article class="markdown-body" v-html="md"></article>
</template>

<script>
import md from "../markdown/introduce.md";
export default {
  data() {
    return {
      md,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>