<template>
  <router-view />
</template>

<script>
import { provide, ref } from "vue";
import { router } from "./router";
export default {
  name: "App",
  setup() {
    // 初始化获取屏幕的宽度
    const width = document.documentElement.clientWidth;
    // const asideVisible = ref(false)
    const asideVisible = ref(width <= 500 ? false : true);
    provide("asideVisible", asideVisible);
    // 路由切换后做一些事情
    router.afterEach(() => {
      if (width <= 500) {
        asideVisible.value = false;
      }
    });
  },
};
</script>
