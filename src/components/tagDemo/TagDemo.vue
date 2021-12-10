<template>
  <div>
    <h1>tag 标签</h1>
    <br />
    <t-tag @beforeTagClose="gfye">123</t-tag>
    <t-tag type="success" :disabled="true">1234</t-tag>
    <t-tag  type="danger" icon="31sousuo">1234</t-tag>
    <t-tag type="info">34567</t-tag>
    <t-tag type="warning">6789</t-tag>

    <div>
      <t-tag v-for="(item, index) in tags" :key="index"> {{ item }} </t-tag>
      <t-tag-input @addTag="handleAddTarget"></t-tag-input>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const gfye = (cb: (flag: boolean) => void) => {
      cb(true);
    };

    const state = reactive({
      tags: ["书法", "绘画", "篆刻"],
    });

    const handleAddTarget = (value: string) => {
      state.tags.push(value);
    };
    return { gfye, handleAddTarget, ...toRefs(state) };
  },
});
</script>




<style scoped>
</style>