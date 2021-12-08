<template>
  <div>
    <h1>InputNumber 计数器</h1>
    <Demo :component="InputNumber1Demo">
      基本的计数器并没有对数值进行校验，也就是说可以为负数，你可以通过max和min属性进行约束，并且支持直接输入
    </Demo>

    <Demo :component="InputNumber2Demo"> </Demo>

    <Demo :component="InputNumber3Demo"> </Demo>

    <Demo :component="InputNumber4Demo">
      严格步长的宗旨就是你当前的数值必须是你设置的步长的整数倍
    </Demo>

    <Demo :component="InputNumber5Demo"></Demo>

    <attribute :attributeConfig="attributeConfig"></attribute>

    <Event :eventConfig="attributeEventConfig"></Event>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Demo from "../Demo.vue";
import InputNumber1Demo from "./Demo/inputNumber1.demo.vue";
import InputNumber2Demo from "./Demo/inputNumber2.demo.vue";
import InputNumber3Demo from "./Demo/inputNumber3.demo.vue";
import InputNumber4Demo from "./Demo/inputNumber4.demo.vue";
import InputNumber5Demo from "./Demo/inputNumber5.demo.vue";
import { attributeConfig } from "./config/attribute.config";
import { attributeEventConfig } from "./config/event.config";

export default defineComponent({
  components: {
    Demo,
  },
  setup() {
    return {
      InputNumber1Demo,
      InputNumber2Demo,
      InputNumber3Demo,
      InputNumber4Demo,
      InputNumber5Demo,
      attributeConfig,
      attributeEventConfig,
    };
  },
});
</script>

<style scoped>
</style>