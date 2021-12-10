<demo>
可移除
</demo>

<template>
  <div>
    <t-tag :closeable="true">普通</t-tag>
    <t-tag :closeable="true" type="success">成功</t-tag>
    <t-tag :closeable="true" type="danger">危险</t-tag>
    <t-tag :closeable="true" type="info">信息</t-tag>
    <t-tag :closeable="true" type="warning">警告</t-tag>
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