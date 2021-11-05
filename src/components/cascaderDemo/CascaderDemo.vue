<template>
  <div>
    <h1>cascader 级联选择器</h1>
    <Demo :component="Cascader1Demo"></Demo>
    <Attribute :attributeConfig="attributeConfig"></Attribute>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Demo from "../Demo.vue";
import Cascader1Demo from "./Demo/cascader1.demo.vue";
import Attribute from "../../base-ui/attribute";
import { attributeConfig } from "./config/cascaderAttribute";

export default defineComponent({
  components: {
    Demo,
    Attribute,
  },
  setup() {
    return { Cascader1Demo, attributeConfig };
  },
});
</script>

<style scoped>
</style>