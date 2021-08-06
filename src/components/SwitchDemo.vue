<template>
  <div>
    <h1>Switch组件</h1>
    <Demo :component="Switch1Demo"></Demo>
    <Demo :component="Switch2Demo"></Demo>
    
  </div>
</template>

<script>
import Switch1Demo from "./switch1.demo.vue";
import Switch2Demo from "./switch2.demo.vue";
import Demo from './Demo.vue'

const Prism = window.Prism;
console.log(Prism);
export default {
  components: {
    Demo
  },

  setup() {
    return { Switch1Demo, Switch2Demo, Prism };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>