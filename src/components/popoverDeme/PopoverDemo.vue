<template>
  <div>
    <h1>Popover 气泡</h1>
    <Demo :component="Popover1Demo"></Demo>
    <Demo :component="Popover2Demo"></Demo>

    <Attribute :attributeConfig="attributeConfig"></Attribute>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Demo from "../Demo.vue";
import Popover1Demo from "./demo/Popover1.demo.vue";
import Popover2Demo from "./demo/Popover2.demo.vue";
import Attribute from "../../base-ui/attribute/index";

export default defineComponent({
  components: {
    Demo,
    Attribute,
  },
  setup() {
    const attributeConfig = {
      attributeTitle: "TPopover Attribute",
      attributeItems: [
        {
          name: "position",
          desc: "气泡弹出位置",
          type: "String",
          value: "top|right|bottom|left ",
          defaultValue: "top",
        },
        {
          name: "trigger",
          desc: "触发方式",
          type: "String",
          value: "click|hover ",
          defaultValue: "click",
        },
      ],
    };
    return { Popover1Demo, Popover2Demo, attributeConfig };
  },
});
</script>

<style scoped>
</style>