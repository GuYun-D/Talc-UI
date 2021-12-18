<demo>
每次仅展开一个
</demo>

<template>
  <div>
    <t-collapse :single="true">
      <t-collapse-item title="标题一" name="4">哈哈哈</t-collapse-item>
      <t-collapse-item title="标题二" name="5">啦啦啦</t-collapse-item>
      <t-collapse-item title="标题三" name="6">呼呼呼</t-collapse-item>
      12345
    </t-collapse>
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