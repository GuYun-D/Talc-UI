<demo>
默认展开
</demo>

<template>
  <div>
    <t-collapse selected="7">
      <t-collapse-item title="标题一" name="7">哈哈哈</t-collapse-item>
      <t-collapse-item title="标题二" name="8">啦啦啦</t-collapse-item>
      <t-collapse-item title="标题三" name="9">呼呼呼</t-collapse-item>
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