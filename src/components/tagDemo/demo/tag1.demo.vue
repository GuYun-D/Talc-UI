<demo>
基本用法
</demo>

<template>
  <div>
    <t-tag>普通</t-tag>
    <t-tag type="success">成功</t-tag>
    <t-tag type="danger">危险</t-tag>
    <t-tag type="info">信息</t-tag>
    <t-tag type="warning">警告</t-tag>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.t-tag{
  margin: 5px;
}
</style>