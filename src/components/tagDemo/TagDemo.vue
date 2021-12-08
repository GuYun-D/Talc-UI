<template>
  <div>
    <h1>tag 标签</h1>
    <br />
    <t-tag @beforeTagClose="gfye">123</t-tag>
    <t-tag type="success">1234</t-tag>
    <t-tag type="danger">1234</t-tag>
    <t-tag type="info">34567</t-tag>
    <t-tag type="warning">6789</t-tag>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const gfye = (cb: (flag: boolean) => void) => {
      cb(true);
    };
    return { gfye };
  },
});
</script>




<style scoped>
</style>