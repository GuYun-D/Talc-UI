<template>
  <div class="t-select-no-data-tip">- 没有搜索到数据 -</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "t-select-no-data-tip",
  setup() {
    return {};
  },
});
</script>

<style scoped>
.t-select-no-data-tip {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #666;
  padding: 10px;
}
</style>