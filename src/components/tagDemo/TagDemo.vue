<template>
  <div>
    <h1>tag 标签</h1>

    <Demo :component="Tag1Demo"></Demo>

    <Demo :component="Tag2Demo">
      标签在关闭前会触发一个beforeTagClose的事件，该事件的函数参数是一个回调函数，回调函数接受一个布尔值属性的参数，如果该参数为false，tag不会被移除，如果没有监听事件，那么点击就会直接删除
    </Demo>

    <Demo :component="Tag3Demo"></Demo>

    <Demo :component="Tag4Demo"></Demo>

    <Demo :component="Tag5Demo"></Demo>

    <Attribute :attributeConfig="attributeConfig"></Attribute>

    <Event :eventConfig="attributeEventConfig"></Event>

    <Event :eventConfig="attributeEventConfig1"></Event>
  </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import Demo from "../Demo.vue";
import Tag1Demo from "./demo/tag1.demo.vue";
import Tag2Demo from "./demo/tag2.demo.vue";
import Tag3Demo from "./demo/tag3.demo.vue";
import Tag4Demo from "./demo/tag4.demo.vue";
import Tag5Demo from "./demo/tag5.demo.vue";
import {
  attributeConfig,
  attributeEventConfig,
  attributeEventConfig1,
} from "./config";

export default defineComponent({
  components: {
    Demo,
  },
  setup() {
    return {
      Tag1Demo,
      Tag2Demo,
      Tag3Demo,
      Tag4Demo,
      Tag5Demo,
      attributeConfig,
      attributeEventConfig,
      attributeEventConfig1,
    };
  },
});
</script>
