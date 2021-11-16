<template>
  <div>
    <h1>Card 卡片</h1>
    <Demo :component="Card1Demo">
      卡片视图，内置了header插槽，里面的布局默认是flex布局，当然你也可以不使用，就像右侧的简单卡片，通过cardWidth属性可以自定义card的宽度
    </Demo>

    <Demo :component="Card2Demo">
      cart组件中同时也内置了CarDFooter插槽，通过配合commodityCard属性，开启商品卡片模式可以让card组件的内容更加丰富
    </Demo>

    <Demo :component="Card3Demo"></Demo>

    <attribute :attributeConfig="attributeConfig"></attribute>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Demo from "../Demo.vue";
import { Card1Demo, Card2Demo, Card3Demo } from "./demo";
import { attributeConfig } from "./config";

export default defineComponent({
  components: {
    Demo,
  },
  setup() {
    return { Card1Demo, Card2Demo, Card3Demo, attributeConfig };
  },
});
</script>

<style scoped lang="scss">
.card-text {
  padding: 10px;
}

.footer-op {
  display: flex;
  align-items: center;
  padding: 10px;

  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
