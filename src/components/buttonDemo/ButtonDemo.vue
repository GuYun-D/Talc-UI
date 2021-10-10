<template>
  <div>
    <h1>Button按钮组件</h1>
    <Demo :component="Button1demo"></Demo>
    <Demo :component="Button2demo"></Demo>
    <Demo :component="Button3demo"></Demo>
    <Demo :component="Button4demo"></Demo>
    <Demo :component="Button5demo"></Demo>
    <Attribute :attributeConfig="attributeConfig"></Attribute>
  </div>
</template>

<script lang="ts">
import Button1demo from "./demo/Button1.demo.vue";
import Button2demo from "./demo/Button2.demo.vue";
import Button3demo from "./demo/Button3.demo.vue";
import Button4demo from "./demo/Button4.demo.vue";
import Button5demo from "./demo/Button5.demo.vue";
import Demo from "../Demo.vue";
import Attribute from "../../base-ui/attribute/index";
import { attributeConfig } from "./config/attribute.config";

export default {
  components: {
    Demo,
    Attribute,
  },

  setup() {
    const onClick = () => {
      console.log("执行了");
    };

    return {
      onClick,
      Button1demo,
      Button2demo,
      Button3demo,
      Button4demo,
      Button5demo,
      attributeConfig,
    };
  },
};
</script>

<style lang="scss">
h3 {
  color: #42b983;
  margin: 20px 0;
}
</style>
