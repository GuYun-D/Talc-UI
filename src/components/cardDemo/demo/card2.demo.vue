<demo>
  多彩卡片
</demo>

<template>
  <div class="card-demo2-wrapper">
    <t-card
      :cardWidth="200"
      :commodityCard="true"
      :imgSrc="'/card/1.jpg'"
      imgLink="http://product.dangdang.com/23289047.html"
    >
      <template #commodityCard>
        <div>MOON映像 青春摄影集</div>
        <em class="price">￥22.00</em>
      </template>
    </t-card>

    <t-card
      :cardWidth="200"
      :commodityCard="true"
      imgSrc="/card/2.webp"
      imgLink="https://github.com/GuYun-D"
    >
      <template #commodityCard>
        <div class="person-main">
          <img src="/card/3.webp" alt="" />
          <div class="person-desc">
            <span>独自空忆成欢</span>
            <span>PHP是最好的语言</span>
          </div>
        </div>
      </template>

      <template #cardFooter>
        <div class="card-footer-wrapper">
          <t-icon icon="home1"></t-icon>
          <t-icon icon="message"></t-icon>
          <t-icon icon="setting"></t-icon>
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
.card-demo2-wrapper {
  display: flex;
  align-items: flex-start;

  .t-card{
    margin: 0 auto;
  }

  .price {
    color: orange;
    font-size: 16px;
  }

  .person-main {
    display: flex;
    align-items: center;
    padding: 2px 10px;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .person-desc {
      display: flex;
      flex-direction: column;

      span {
        &:nth-child(2) {
          color: #ccc;
          font-size: 14px;
        }
      }
    }
  }

  .card-footer-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    .t-icon {
      flex: 1;
      margin: 20px 0;
      font-size: 20px;
    }
  }
}
</style>