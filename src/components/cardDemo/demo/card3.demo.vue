<demo>
  卡片阴影
</demo>

<template>
  <div class="card-demo3-wrapper">
    <t-card show-shadow="none">不显示阴影,none可传可不传</t-card>
    <t-card show-shadow="hover">hover触发</t-card>
    <t-card show-shadow="show">一直显示</t-card>
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
.card-demo3-wrapper {
  justify-content: center;
  align-items: center;

  .t-card {
    width: 25.333333333333%;
    display: inline-block;
    margin: 20px;
    height: 200px;
    line-height: 200px;
    text-align: center;
  }
}
</style>