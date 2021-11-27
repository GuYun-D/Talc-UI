<template>
  <div>
    <h1>Switch 开关</h1>

    <Demo :component="Switch1Demo"></Demo>

    <Demo :component="Switch2Demo"></Demo>

    <Demo :component="Switch3Demo"></Demo>

    <Demo :component="Switch4Demo">
      有些时候你可能需要加提示文字，组件提供了开关处于开和关时的状态的提示文字，同时你也可以定义开关为开时的文字颜色
    </Demo>

    <Attribute :attributeConfig="attributeConfig"></Attribute>

    <!-- <t-switch
      :disabled="true"
      v-model="isSwitch"
      @switch-change="change"
      active-color="#f40"
      inactive-color="#409eff"
    ></t-switch> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Switch1Demo from "./demo/switch1.demo.vue";
import Switch2Demo from "./demo/switch2.demo.vue";
import Switch3Demo from "./demo/switch3.demo.vue";
import Switch4Demo from "./demo/switch4.demo.vue";
import Demo from "../Demo.vue";
import { attributeConfig } from "./config/attribute.config";

export default defineComponent({
  components: {
    Demo,
  },
  setup() {
    const isSwitch = ref(false);
    const change = (value: boolean) => {
      console.log("发生改变: " + value);
    };
    return {
      isSwitch,
      change,
      Switch1Demo,
      Switch2Demo,
      Switch3Demo,
      Switch4Demo,
      attributeConfig,
    };
  },
});
</script>

<style scoped>
</style>