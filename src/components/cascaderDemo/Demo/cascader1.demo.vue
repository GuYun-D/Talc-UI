<demo>
基本用法(开发中)
</demo>

<template>
  <div>
    <t-cascader
      @update:changeSelected="selected = $event"
      :data-source="cityData"
      :selected="selected"
    ></t-cascader>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const cityData = [
      {
        name: "浙江省",
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
            children: [{ name: "鼓楼" }, { name: "台江" }, { name: "苍山" }],
          },
          { name: "莆田" },
          { name: "厦门" },
        ],
      },
      {
        name: "广东",
        children: [
          {
            name: "佛山",
            children: [
              {
                name: "三水",
              },
              {
                name: "南海",
              },
              {
                name: "禅城",
              },
            ],
          },
          {
            name: "广州",
          },
          {
            name: "东莞",
          },
        ],
      },
    ];

    const selected = ref([]);
    return { cityData, selected };
  },
});
</script>

<style scoped>
</style>