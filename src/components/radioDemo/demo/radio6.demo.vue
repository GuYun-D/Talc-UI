<demo>
按钮样式
</demo>

<template>
  <div>
    <t-radio-group v-model="checked" radioType="button">
      <t-radio
        v-for="(item, index) in options"
        :key="index"
        :option="item"
      ></t-radio>
    </t-radio-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let checked = ref();

    const options = [
      {
        label: "上海",
        value: "shanghai",
      },
      {
        label: "北京",
        value: "beijing",
      },
      {
        label: "深圳",
        value: "shenzhen",
      },
      {
        label: "广州",
        value: "guangzhou",
      },
    ];
    return { checked, options };
  },
});
</script>

<style scoped>
</style>