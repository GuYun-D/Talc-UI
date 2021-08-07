<template>
  <div>
    <h1>Button按钮组件</h1>
    <Demo :component="Button2demo"></Demo>
    <Demo :component="Button3demo"></Demo>
    <Demo :component="Button4demo"></Demo>
    <Demo :component="Button5demo"></Demo>

  </div>
</template>

<script lang="ts">
import Button1demo from "./demoUI/Button/Button1.demo.vue";
import Button2demo from "./demoUI/Button/Button2.demo.vue";
import Button3demo from "./demoUI/Button/Button3.demo.vue";
import Button4demo from "./demoUI/Button/Button4.demo.vue";
import Button5demo from "./demoUI/Button/Button5.demo.vue";
import Demo from "./Demo.vue";

export default {
  components: {
    Demo,
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