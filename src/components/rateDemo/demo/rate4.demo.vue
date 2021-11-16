<demo>
支持辅助文字
</demo>

<template>
  <div>
    <t-rate :num="3" :auxiliaryTextVisible="true"></t-rate>

    <em>自定义辅助文字</em>
    <t-rate
      :num="1"
      :auxiliaryTextVisible="true"
      :auxiliaryText="['不懂', '了解', '熟悉', '掌握', '精通']"
    ></t-rate>
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

<style scoped>
.t-rate {
  margin: 20px;
}
</style>