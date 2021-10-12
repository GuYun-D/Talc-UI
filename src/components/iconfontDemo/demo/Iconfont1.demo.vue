<demo>
  组件用法
</demo>

<template>
  <div class="svg-com">
    <t-icon class="t-icon" icon="home"></t-icon>
    <t-icon class="t-icon" icon="kefu"></t-icon>
    <t-icon class="t-icon" icon="shouji1"></t-icon>
    <t-icon class="t-icon" icon="xiangji1"></t-icon>
  </div>
</template>

<script lang="ts">
import TIcon from "../../../lib/iconfont/src/TIcon.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    TIcon,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.svg-com {

  .t-icon {
    font-size: 50px;
    fill: rgb(170, 0, 0);
  }
}
</style>
