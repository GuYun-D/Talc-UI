<template>
  <div>
    <h1>Toast组件</h1>
    <Demo :component="Toast1Demo"></Demo>
    <Demo :component="Toast2Demo"></Demo>
    <Demo :component="Toast3Demo"></Demo>
    <Demo :component="Toast4Demo"></Demo>
    <Attribute :attributeConfig="attributeConfig"></Attribute>
    <Attribute :attributeConfig="attributeEventConfig"></Attribute>
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
import { attributeEventConfig } from "./config/attributeEvent.config";

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
      attributeEventConfig,
    };
  },
});
</script>

<style scoped>
</style>