<template>
  <router-view />
</template>

<script>
import { provide, ref } from 'vue';

export default {
  name: "App",
  setup(){
    // 初始化获取屏幕的宽度
    const width = document.documentElement.clientWidth
    // const asideVisible = ref(false)
    const asideVisible = ref(width <= 500 ? false : true)
    provide('asideVisible', asideVisible)
  }
};
</script>
