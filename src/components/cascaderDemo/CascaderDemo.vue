<template>
  <div>
    <t-cascader :data-source="cityData"></t-cascader>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const cityData = [
      {
        name: "浙江",
        children: [
          {
            name: "杭州",
            children: [{ name: "上城" }, { name: "下城" }, { name: "江干" }],
          },
          {
            name: "嘉兴",
            children: [{ name: "南湖" }, { name: "秀洲" }, { name: "嘉善" }],
          },
          { name: "湖州" },
        ],
      },
      {
        name: "福建",
        children: [
          {
            name: "福州",
            children: [
              { name: "鼓楼" },
              { name: "台江" },
              { name: "苍山" },
            ],
          },
          { name: "莆田" },
          { name: "厦门" },
        ],
      },
    ];
    return { cityData };
  },
});
</script>

<style scoped>
</style>