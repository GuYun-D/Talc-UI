<demo>
  基本用法
</demo>

<template>
  <div>
    <t-layout class="layout wrapper">
      <t-header class="demo-layout">header</t-header>
      <t-content class="demo-layout">content</t-content>
      <t-footer class="demo-layout">footer</t-footer>
    </t-layout>

    <t-layout class="layout wrapper">
      <t-header class="demo-layout">header</t-header>
      <t-layout>
        <t-sider class="demo-layout">Sider</t-sider>
        <t-content class="demo-layout">content</t-content>
      </t-layout>
      <t-footer class="demo-layout">footer</t-footer>
    </t-layout>

    <t-layout class="layout wrapper">
      <t-header class="demo-layout">header</t-header>
      <t-layout>
        <t-content class="demo-layout">content</t-content>
        <t-sider class="demo-layout">Sider</t-sider>
      </t-layout>
      <t-footer class="demo-layout">footer</t-footer>
    </t-layout>

    <t-layout class="layout wrapper">
      <t-sider class="demo-layout">Sider</t-sider>
      <t-layout>
        <t-header class="demo-layout">header</t-header>
        <t-content class="demo-layout">content</t-content>
        <t-footer class="demo-layout">footer</t-footer>
      </t-layout>
    </t-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.t-layout {
  height: 50vh;
  flex-grow: 1;

  .t-sider {
    width: 200px;
    background-color: #bcbdc2;
    
  }

  &.wrapper {
    margin: 20px 0;
  }

  .t-header {
    height: 50px;
    background-color: #88898e;
  }

  .t-content {
    background-color: #c9cacc;
  }

  .t-footer {
    height: 50px;
    background-color: #b4b5ba;
  }

  .demo-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 20px;
  }
}
</style>