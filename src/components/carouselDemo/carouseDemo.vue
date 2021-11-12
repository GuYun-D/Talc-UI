<template>
  <div>
    <h1>carousel 轮播组件</h1>
    <Explain
      >轮播图组件只需要你注册t-carousel和t-carousel-item这两个组件，为t-carousel-item组件传递一个key值和图片路径就可以轻松实现一个轮播图</Explain
    >
    <Demo :component="Carousel1Demo">
      需要注意的是，t-carousel组件的宽度是依据其外部的父元素的宽高而实现的，所以你需要给t-carousel组件的父元素定宽，后续我会添加width和height属性对组件的尺寸进行直接控制
    </Demo>

    <Demo :component="Carousel2Demo">
      你可以使用initial属性指定轮播组件第一个显示的图片是哪一张，initial的值应与t-carousel-item的key值相对应
    </Demo>

    <Demo :component="Carousel3Demo">
      指示器的触发方式有两种：hover和click，同时你也可以通过dot-type属性修改指示器的样式：circle
      和 rectangle 两种样式
    </Demo>

    <Demo :component="Carousel4Demo"></Demo>

    <Demo :component="Carousel5Demo"
      >通过switchType属性，你可以选择每个图片在切换的动画，是选择滑动切换还是透明度切换</Demo
    >

    <Attribute :attributeConfig="carouselAttributeConfig"></Attribute>
    
    <Attribute :attributeConfig="carouselItemAttributeConfig"></Attribute>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Carousel1Demo from "./Demo/carousel1.demo.vue";
import Carousel2Demo from "./Demo/carousel2.demo.vue";
import Carousel3Demo from "./Demo/carousel3.demo.vue";
import Carousel4Demo from "./Demo/carousel4.demo.vue";
import Carousel5Demo from "./Demo/carousel5.demo.vue";
import Demo from "../Demo.vue";
import Explain from "../../base-ui/explain";
import Attribute from "../../base-ui/attribute";
import { carouselAttributeConfig, carouselItemAttributeConfig } from "./config";

export default defineComponent({
  components: {
    Demo,
    Explain,
    Attribute,
  },
  setup() {
    const carouselData = [
      {
        id: 647384,
        image_name: "宇智波",
        img_url: "carousel/1.jpg",
      },
      {
        id: 64e3484,
        image_name: "鼬",
        img_url: "carousel/2.jpg",
      },
      {
        id: 6473647344,
        image_name: "佐助",
        img_url: "carousel/3.jpg",
      },
      {
        id: 6473782184,
        image_name: "晓",
        img_url: "carousel/4.jpg",
      },
    ];
    return {
      carouselData,
      Carousel1Demo,
      Carousel2Demo,
      Carousel3Demo,
      Carousel4Demo,
      Carousel5Demo,
      carouselAttributeConfig,
      carouselItemAttributeConfig,
    };
  },
});
</script>

<style scoped lang="scss">
.box {
  width: 200px;
  height: 150px;
  box-sizing: border-box;
  background-color: #ccc;
  border: 1px solid red;
}

.demo {
  width: 100px;
  height: 100px;
}
</style>