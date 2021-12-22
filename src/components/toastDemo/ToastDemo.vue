<template>
  <div>
    <h1>Toast</h1>
    <Demo :component="Toast1Demo"></Demo>
    <Demo :component="Toast2Demo"> toast可以自动关闭的，默认关闭的时间为5s，如果你不喜欢这个时间，你可以使用autoCloseDelay来定义toast的关闭时间，如1s 就是:autoCloseDelay="1"</Demo>
    <Demo :component="Toast3Demo">
      如果你想在toast中书写html，那就请开启:enableHtml="true"，将你想要写的html代码写在名为toastHtml的属性中
    </Demo>
    <Demo :component="Toast4Demo">
      自定义关闭样式主要就是指点击关闭的文本，以及支持传入一个callBack回调函数,这个回调会在toast关闭之前触发。
    </Demo>
    <Attribute :attributeConfig="attributeConfig"></Attribute>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Demo from "../Demo.vue";
import Attribute from "../../base-ui/attribute/index";
import Toast1Demo from "./demo/toast1.demo.vue";
import Toast2Demo from "./demo/toast2.demo.vue";
import Toast3Demo from "./demo/toast3.demo.vue";
import Toast4Demo from "./demo/toast4.demo.vue";
import { attributeConfig } from "./config/attributeConfig";

export default defineComponent({
  components: {
    Demo,
    Attribute,
  },
  setup() {
    return {
      Toast1Demo,
      Toast2Demo,
      Toast3Demo,
      Toast4Demo,
      attributeConfig,
    };
  },
});
</script>

<style scoped>
</style>