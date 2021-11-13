<template>
  <div>
    <h1>magnifier 放大镜</h1>
    <Demo :component="Magnifier1Demo"></Demo>
    <Demo :component="Magnifier2Demo">
      你可以添加一个link属性图片添加一个链接，同时也支持blank属性，你可以决定链接是否要在新窗口打开
    </Demo>
    <Demo :component="Magnifier3Demo">
      将放大镜的样式改成圆形的话，你需要将放大镜的宽高设置成正方形，也可以使用默认值
    </Demo>

    <Attribute :attributeConfig="attributeConfig"></Attribute>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Magnifier1Demo from "./demo/magnifier1.demo.vue";
import Magnifier2Demo from "./demo/magnifier2.demo.vue";
import Magnifier3Demo from "./demo/magnifier3.demo.vue";
import Demo from "../Demo.vue";
import { attributeConfig } from "./config/attribute.config";

export default defineComponent({
  components: {
    Demo,
  },
  setup() {
    return { Magnifier1Demo, Magnifier2Demo, Magnifier3Demo, attributeConfig };
  },
});
</script>

<style scoped>
</style>