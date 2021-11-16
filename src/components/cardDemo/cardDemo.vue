<template>
  <div>
    <h1>Card 卡片</h1>
    <t-card :cardWidth="200" show-shadow="hover">
      <template #header>
        <span>胡大爷</span>
        <t-button>操作</t-button>
      </template>
      <div v-for="item in 5" :key="item" class="card-text">
        {{ Math.random().toString(36).substr(1) }}
      </div>
    </t-card>

    <t-card :cardWidth="200">
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
.card-text {
  padding: 10px;
}
</style>