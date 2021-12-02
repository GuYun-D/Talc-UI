<template>
  <div>
    <h1>radio 单选</h1>

    <Demo :component="Radio1Demo"></Demo>

    <Demo :component="Radio2Demo"></Demo>

    <Demo :component="Radio3Demo"></Demo>

    <Demo :component="Radio4Demo"></Demo>

    <Demo :component="Radio5Demo"></Demo>

    <Demo :component="Radio6Demo"></Demo>

    <Attribute :attributeConfig="radioPropsConfig"></Attribute>
    <Attribute :attributeConfig="radioGroupPropsConfig"></Attribute>
    <Event :eventConfig="attributeEventConfig"></Event>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Demo from "../Demo.vue";
import Radio1Demo from "./demo/radio1.demo.vue";
import Radio2Demo from "./demo/radio2.demo.vue";
import Radio3Demo from "./demo/radio3.demo.vue";
import Radio4Demo from "./demo/radio4.demo.vue";
import Radio5Demo from "./demo/radio5.demo.vue";
import Radio6Demo from "./demo/radio6.demo.vue";
import {
  radioGroupPropsConfig,
  radioPropsConfig,
  attributeEventConfig,
} from "./config";

export default defineComponent({
  components: {
    Demo,
  },
  setup() {
    return {
      Radio1Demo,
      Radio2Demo,
      Radio3Demo,
      Radio4Demo,
      Radio5Demo,
      Radio6Demo,
      radioGroupPropsConfig,
      radioPropsConfig,
      attributeEventConfig,
    };
  },
});
</script>

<style scoped>
</style>