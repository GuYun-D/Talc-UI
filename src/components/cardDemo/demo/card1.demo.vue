<demo>
  基本使用
</demo>

<template>
  <div class="base-card">
    <t-card>
      <template #header>
        <span>经典卡片</span>
        <t-button>操作</t-button>
      </template>
      <div v-for="item in 5" :key="item" class="card-text">
        {{ Math.random().toString(36).substr(1) }}
      </div>
    </t-card>

    <t-card :cardWidth="300">
      <div v-for="item in 5" :key="item" class="card-text">
        {{ Math.random().toString(36).substr(1) }}
      </div>
    </t-card>
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
.base-card {
  display: flex;

  .t-card {
    flex: 1;
    margin: 10px;
  }
}
.card-text {
  padding: 10px;
}
</style>