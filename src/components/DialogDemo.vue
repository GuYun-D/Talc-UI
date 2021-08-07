<template>
  <div>
    <h1>Dialog组件</h1>

    <Demo :component="DialogDemo1"></Demo>
    <Demo :component="DialogDemo2"></Demo>
  </div>
</template>

<script>
import Demo from "./Demo.vue";

import DialogDemo1 from "./demoUI/Dialog/Dialog1.demo.vue";
import DialogDemo2 from "./demoUI/Dialog/Dialog2.demo.vue";

export default {
  name: "DialogDemo",
  components: {
    Demo,
  },

  setup() {
    return { DialogDemo1, DialogDemo2 };
  },
};
</script>

<style lang="scss">
h3 {
  color: #42b983;
  margin: 20px 0;
}
</style>