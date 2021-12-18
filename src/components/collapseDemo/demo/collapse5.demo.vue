<demo>
支持icon图标
</demo>

<template>
  <div>
    <strong>
      <em>默认icon</em>
    </strong>
    <t-collapse>
      <t-collapse-item title="标题一" :showIcon="true" name="16"
        >哈哈哈</t-collapse-item
      >
      <t-collapse-item title="标题二" :showIcon="true" name="17"
        >啦啦啦</t-collapse-item
      >
      <t-collapse-item title="标题三" :showIcon="true" name="18"
        >呼呼呼</t-collapse-item
      >
    </t-collapse>

    <strong>
      <em>自定义icon</em>
    </strong>
    <t-collapse>
      <t-collapse-item title="标题一" :showIcon="true" icon="shoucang" name="19">哈哈哈</t-collapse-item>
      <t-collapse-item title="标题二" :showIcon="true" icon="fasong" name="20">啦啦啦</t-collapse-item>
      <t-collapse-item title="标题三" :showIcon="true" icon="simple-setting" name="21">呼呼呼</t-collapse-item>
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
strong {
  display: inline-block;
  padding: 20px 0;
  color: rgb(194, 194, 194);
}
</style>>