<template>
  <div>
    <h1>Button按钮</h1>
    <Demo :component="Button1demo">
      组件提供了三种类型的按钮，普通按钮。文本按钮和连接式的按钮，但是连接式的按钮没有添加超链接功能，你可以用过添加事件结合vue-router，通过编程式导航可以实现路由的切换
    </Demo>
    <Demo :component="Button6demo">
      按钮内部可以内嵌字体图标，通过添加图标可以增加按钮的辨识度，不过只允许使用svg的字体图标。如果你使用class的图标，那么默认图标显示在按钮左侧
    </Demo>
    <Demo :component="Button2demo"></Demo>
    <Demo :component="Button3demo"></Demo>
    <Demo :component="Button4demo"></Demo>
    <Demo :component="Button5demo"></Demo>
    <Demo :component="Button7demo">
      使用按钮组你需要导入一个TButtonGroup的组件，该组件内部直接子元素必须使用TButton组件
    </Demo>
    <Attribute :attributeConfig="attributeConfig"></Attribute>
  </div>
</template>

<script lang="ts">
import Button1demo from "./demo/Button1.demo.vue";
import Button2demo from "./demo/Button2.demo.vue";
import Button3demo from "./demo/Button3.demo.vue";
import Button4demo from "./demo/Button4.demo.vue";
import Button5demo from "./demo/Button5.demo.vue";
import Button6demo from "./demo/Button6.demo.vue";
import Button7demo from "./demo/Button7.demo.vue";
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
      Button6demo,
      Button7demo,
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
