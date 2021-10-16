<template>
  <div>
    <h1>Layout 布局</h1>
    <Explain class="explain">
      <p>布局组件</p>
      <ul>
        <li>
          &lt;t-layout&gt;：外层布局容器。&lt;t-layout&gt;直接包含&lt;t-sider&gt;组件时，这三个组件默认是上下排列，当你使用&lt;t-footer&gt;组件时，尽量再使用一个&lt;t-layout&gt;将它作为sider的父组件，也就是下面布局的第二种和第三种方式，因为t-layout组件内部会对sider组件进行检测，当layout组件检测到sider组件的存在时，其内部的排列顺序将变成横向排列
        </li>
        <li>&lt;t-header&gt;：顶栏容器</li>
        <li>&lt;t-content&gt;：内容容器</li>
        <li>&lt;t-sider&gt;：侧边栏容器</li>
        <li>&lt;t-footer&gt;：底栏容器</li>
      </ul>
    </Explain>

    <div class="container"></div>
    <Demo :component="Content1Demo"></Demo>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Content1Demo from "./deom/Content1.demo.vue";
import Demo from "../Demo.vue";
import Explain from "../../base-ui/explain/src/Explain.vue";

export default defineComponent({
  components: {
    Demo,
    Explain,
  },
  setup() {
    return { Content1Demo };
  },
});
</script>
<style lang="scss" scoped>
.explain {
  p {
    font-weight: 600;
  }

  ul {
    li {
      color: rgb(68, 67, 67);
      font-size: 14px;
      margin: 10px 0;
      text-indent: 2em;
      line-height: 2;
      
    }
  }
}
</style>