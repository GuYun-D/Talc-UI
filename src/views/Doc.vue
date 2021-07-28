<template>
  <div>
    <Topnav></Topnav>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">switch 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>主内容</main>
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
    return { asideVisible };
  },
};
</script>

<style lang="scss" scoped>
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }

  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
  }
}
</style>