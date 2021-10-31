<template>
  <div>
    <h1>collapse折叠面板</h1>
    <Demo :component="CollapseDemo1">
      collapse需要接收一个name属性作为collapse-item的唯一标识
    </Demo>

    <Demo :component="CollapseDemo2"></Demo>

    <Demo :component="CollapseDemo3">
      你只需要为collapse添加一个selected属性就能轻松实现默认展开一行，需要注意的是它的属性值对应的是collapse-item的name属性
    </Demo>

    <Demo :component="CollapseDemo4"
      >collapse提供了两种形式的禁用，我觉得应该存在这两种情境的，他就是collapse-disabled属性，disabled和hidden得区别就是元素是否显示</Demo
    >

    <Attribute :attributeConfig="collapseAttributeConfig"></Attribute>
    <Attribute :attributeConfig="collapseItemAttributeConfig"></Attribute>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Demo from "../Demo.vue";
import CollapseDemo1 from "./demo/collapse1.demo.vue";
import CollapseDemo2 from "./demo/collapse2.demo.vue";
import CollapseDemo3 from "./demo/collapse3.demo.vue";
import CollapseDemo4 from "./demo/collapse4.demo.vue";
import Attribute from "../../base-ui/attribute/index";
import { collapseAttributeConfig } from "./config/collapseAttribute.config";
import { collapseItemAttributeConfig } from "./config/collapspItemAttribute.config";

export default defineComponent({
  components: {
    Demo,
    Attribute,
  },
  setup() {
    return {
      collapseItemAttributeConfig,
      collapseAttributeConfig,
      CollapseDemo1,
      CollapseDemo2,
      CollapseDemo3,
      CollapseDemo4,
    };
  },
});
</script>

<style scoped>
</style>