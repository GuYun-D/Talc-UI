<template>
  <div>
    <h1>Rate 评分</h1>
    <Explain
      >一般情况下，对于评分都是使用五颗星来进行评测，所以我的rate组件只支持五颗星，没有让用户自定义星的个数</Explain
    >

    <Demo :component="Rate1Demo"></Demo>
    <Demo :component="Rate3Demo"></Demo>
    <Demo :component="Rate2Demo">
      rate支持通过size属性自定义星星的大小，而且也可以修改被选中星星的颜色
    </Demo>

    <Demo :component="Rate4Demo"></Demo>
    <Demo :component="Rate5Demo">
      rate组件可以做展示评分的作用，并且支持半星，小数
    </Demo>

    <Attribute :attributeConfig="attributeConfig"></Attribute>
    <Event :eventConfig="attributeEventConfig"></Event>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Demo from "../Demo.vue";
import Rate1Demo from "./demo/rate1.demo.vue";
import Rate2Demo from "./demo/rate2.demo.vue";
import Rate3Demo from "./demo/rate3.demo.vue";
import Rate4Demo from "./demo/rate4.demo.vue";
import Rate5Demo from "./demo/rate5.demo.vue";
import { attributeConfig, attributeEventConfig } from "./config";

export default defineComponent({
  components: {
    Demo,
  },
  setup() {
    const getStarNum = (number: number) => {
      console.log(number);
    };
    return {
      getStarNum,
      Rate1Demo,
      Rate2Demo,
      Rate3Demo,
      Rate4Demo,
      Rate5Demo,
      attributeConfig,
      attributeEventConfig,
    };
  },
});
</script>

<style scoped>
</style>