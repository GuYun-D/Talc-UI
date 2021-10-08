<template>
  <div class="layout">
    <Topnav :docBgc="bgcObj" :toggleMenuButtonVisible="true" class="nav" />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/introduce">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-start">开始</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { Ref, inject } from "vue";
export default {
  components: {
    Topnav,
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    // console.log("DOC获取到的为：" + asideVisible.value);
    const bgcObj = {
      backgroundColor: "#fff",
    };
    return { asideVisible, bgcObj };
  },
};
</script>

<style lang="scss" scoped>
$main: #4fc08d;

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 256px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;

    h2 {
      border-bottom: 1px solid #f40;
    }
  }
}
aside {
  background: #fff;
  width: 250px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  padding-top: 66px;
  height: 100%;
  box-shadow: 1px 0 9px #abb6ab;
  > h2 {
    margin-bottom: 4px;
    padding: 10px 10px;
    color: $main;
    border: none;
  }
  > ol {
    > li {
      height: 46px;
      line-height: 46px;
      > a {
        display: block;
        padding-left: 20px;
        font-size: 18px;
        transition: all 250ms;
      }

      .router-link-active {
        display: block;
        width: 100%;
        height: 100%;
        color: $main;
        border-left: 5px solid #4fc08d;
        background: #e8fff4;
      }
    }
  }
}

main {
  overflow: hidden;
}
</style>
