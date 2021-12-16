<demo>
支持辅助文字
</demo>

<template>
  <div>
    <t-rate v-model="num" :auxiliaryTextVisible="true"></t-rate>

    <em>自定义辅助文字</em>
    <t-rate
      v-model="num"
      :auxiliaryTextVisible="true"
      :auxiliaryText="['不懂', '了解', '熟悉', '掌握', '精通']"
    ></t-rate>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const num = ref(3);
    return { num };
  },
});
</script>

<style scoped>
.t-rate {
  margin: 20px;
}
</style>