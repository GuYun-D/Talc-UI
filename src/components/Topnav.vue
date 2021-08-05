<template>
  <div>
    <div class="topnav">
      <div class="logo">
        <img src="../assets/(zhaoxi.net).png" alt="" />

        <router-link to="/">Talc UI</router-link>
      </div>
      <ul class="menu">
        <li><router-link to="/doc">文档</router-link></li>
        <li><router-link to="">Github</router-link></li>
      </ul>

      <svg
        v-if="toggleMenuButtonVisible"
        class="toggleAside"
        @click="toggleAside"
        
      ><use xlink:href="#icon-caidan"></svg>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    // console.log('topnav获取到的为：' + asideVisible.value);
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleAside };
  },
};
</script>

<style lang="scss" scoped>
$color: rgb(51, 54, 57);
$mainColor: #4fc08d;

.topnav {
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  // background: pink;
  display: flex;
  padding: 16px 48px;
  z-index: 10;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid $mainColor;
  > .logo {
    max-width: 8em;
    font-size: 24px;
    margin-right: auto;

    img {
      width: 32px;
      vertical-align: middle;
    }

    a {
      margin-left: 10px;
      vertical-align: -3px;
      color: #1f2225;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    color: $color;
    > li {
      margin: 0 1em;
    }
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    .toggleAside {
      display: inline-block !important;
    }
    > .logo {
      margin: 0 auto;
    }
  }

  .toggleAside {
    display: none;
    width: 34px;
    height: 34px;
    color: $mainColor;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>