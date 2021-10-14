<template>
  <div>
    <h1>Input输入框</h1>
    <Demo :component="Input1Demo"></Demo>
    <Demo :component="Input2Demo"></Demo>
    <Demo :component="Input3Demo"></Demo>
    <Demo :component="Input4Demo"></Demo>
    <Demo :component="Input5Demo"></Demo>
    <Demo :component="Input6Demo"></Demo>
    <Demo :component="Input7Demo"></Demo>
    <Attribute :attributeConfig="attributeConfig"></Attribute>
    <Attribute :attributeConfig="attributeEventConfig"></Attribute>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Demo from "../Demo.vue";
import Input1Demo from "./demo/Input1.demo.vue";
import Input2Demo from "./demo/Input2.demo.vue";
import Input3Demo from "./demo/Input3.demo.vue";
import Input4Demo from "./demo/Input4.demo.vue";
import Input5Demo from "./demo/Input5.demo.vue";
import Input6Demo from "./demo/Input6.demo.vue";
import Input7Demo from "./demo/Input7.demo.vue";
import Attribute from "../../base-ui/attribute/index";
import { attributeConfig } from "./config/attribute.config";
import { attributeEventConfig } from "./config/attributeEvent.config";

export default defineComponent({
  components: {
    Demo,
    Attribute,
  },
  setup() {
    const msg = ref("双向绑定");

    const handleValueChange = (value: any) => {
      console.log(value);
    };
    return {
      handleValueChange,
      msg,
      Input1Demo,
      Input2Demo,
      Input3Demo,
      Input4Demo,
      Input5Demo,
      Input6Demo,
      Input7Demo,
      attributeConfig,
      attributeEventConfig,
    };
  },
});
</script>

<style scoped lang="scss"></style>
