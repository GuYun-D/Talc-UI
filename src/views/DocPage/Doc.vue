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
        <SiderItem :componentList="siderConfig"></SiderItem>
      </aside>
      <main>
        <transition name="yun">
          <router-view></router-view>
        </transition>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../../components/Topnav.vue";
import { Ref, inject, defineComponent } from "vue";
import SiderItem from "../../base-ui/sider-item";
import { siderConfig } from "./config/sider.config";
export default defineComponent({
  components: {
    Topnav,
    SiderItem,
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const bgcObj = {
      backgroundColor: "#fff",
    };
    return { asideVisible, bgcObj, siderConfig };
  },
});
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
  overflow: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 14px;
    height: 14px;
  }

  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    border: 5px solid transparent;
  }

  &::-webkit-scrollbar-track {
    box-shadow: 1px 1px 5px rgba(255, 255, 255, 0.2) inset;
  }

  &::-webkit-scrollbar-thumb {
    min-height: 20px;
    background-clip: content-box;
    box-shadow: 0 0 0 5px rgb(230, 230, 230) inset;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  > h2 {
    margin-bottom: 4px;
    padding: 10px 10px;
    color: rgb(3, 2, 2);

    border: none;
  }
  > ol {
    > li {
      height: 46px;
      line-height: 46px;
      > a {
        display: block;
        padding-left: 20px;
        font-size: 16px;

        transition: all 250ms;
        color: rgba(0, 0, 0, 0.65);
      }

      .router-link-active {
        display: block;
        width: 100%;
        height: 100%;
        color: #fff;
        border-left: 5px solid #4fc08d;
        background-color: rgba(0, 0, 0, 0.65);
      }
    }
  }
}

main {
  overflow: hidden;
}

.yun-enter-from,
.yun-leave-to {
  opacity: 0;
}

.yun-enter-active,
.yun-leave-active {
  transition: opacity 700ms ease;
}

.yun-enter-to,
.yun-leave-from {
  opacity: 1;
}
</style>
