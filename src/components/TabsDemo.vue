<template>
  <div>
    <h1>Tabs 栏</h1>
    <Demo :component="Tabs1"></Demo>
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Tabs1 from "./demoUI/Tabs/Tabs1.demo.vue";
export default {
  components: {
    Demo,
  },

  setup() {
    return { Tabs1 };
  },
};
</script>

<style lang="scss" scoped>
h3 {
  color: #42b983;
  margin: 20px 0;
}
</style>