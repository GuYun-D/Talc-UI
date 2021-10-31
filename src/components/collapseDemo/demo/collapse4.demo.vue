<demo>
禁用的collapse-item
</demo>

<template>
  <div>
    <strong>
      <em>disabled禁用</em>
    </strong>
    <t-collapse>
      <t-collapse-item title="标题一" name="10">哈哈哈</t-collapse-item>
      <t-collapse-item title="标题二" name="11" collapse-disabled="disabled"
        >啦啦啦</t-collapse-item
      >
      <t-collapse-item title="标题三" name="12">呼呼呼</t-collapse-item>
    </t-collapse>

    <strong>
      <em>hidden禁用</em>
    </strong>
    <t-collapse>
      <t-collapse-item title="标题一" name="13">哈哈哈</t-collapse-item>
      <t-collapse-item title="标题二" name="14" collapse-disabled="hidden"
        >啦啦啦</t-collapse-item
      >
      <t-collapse-item title="标题三" name="15">呼呼呼</t-collapse-item>
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

<style scoped>
strong{
  display: inline-block;
  padding: 20px 0;
}
</style>>