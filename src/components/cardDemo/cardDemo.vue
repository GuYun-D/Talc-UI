<template>
  <div>
    <h1>Card 卡片</h1>

    <!-- <t-card
      :cardWidth="200"
      show-shadow="hover"
      :commodityCard="true"
      :imgSrc="'/card/1.jpg'"
      imgLink="http://product.dangdang.com/23289047.html"
    >
      <template #header>
        <span>胡大爷</span>
        <t-button>操作</t-button>
      </template>
      <div v-for="item in 5" :key="item" class="card-text">
        {{ Math.random().toString(36).substr(1) }}
      </div>

      <template #commodityCard>
        <div>MOON映像 青春摄影集</div>
        <em>￥22.00</em>
      </template>
    </t-card> -->

    <t-card :cardWidth="200" show-shadow="hover">
      <template #header>
        <span>胡大爷</span>
        <t-button>操作</t-button>
      </template>
      <div v-for="item in 5" :key="item" class="card-text">
        {{ Math.random().toString(36).substr(1) }}
      </div>

      <template #cardFooter>
        <div class="footer-op">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </template>
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

.footer-op{
  display: flex;
  align-items: center;
  padding: 10px;

  div{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
