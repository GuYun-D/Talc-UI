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
      >collapse提供了两种形式的禁用，我觉得应该存在这两种情境的，他就是collapse-disabled属性，readonly和hidden得区别就是元素是否显示</Demo
    >

    <Demo :component="CollapseDemo5">
      除此之外，你还可以传入一个名为icon的具名插槽，传入你自己的icon图标，如果想带有动画，我希望你在你传入的icon根标签上加上一个arrow-rotate的类名
    </Demo>

    <Attribute :attributeConfig="collapseAttributeConfig"></Attribute>
    <Event :eventConfig="attributeEventConfig"></Event>
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
import CollapseDemo5 from "./demo/collapse5.demo.vue";
import Attribute from "../../base-ui/attribute/index";
import { collapseAttributeConfig } from "./config/collapseAttribute.config";
import { collapseItemAttributeConfig } from "./config/collapspItemAttribute.config";
import { attributeEventConfig } from "./config/collapse.event";

export default defineComponent({
  components: {
    Demo,
    Attribute,
  },
  setup() {
    return {
      collapseItemAttributeConfig,
      collapseAttributeConfig,
      attributeEventConfig,
      CollapseDemo1,
      CollapseDemo2,
      CollapseDemo3,
      CollapseDemo4,
      CollapseDemo5,
    };
  },
});
</script>

<style scoped>
</style>