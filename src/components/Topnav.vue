<template>
  <div>
    <div class="topnav">
      <div class="logo">LOGO</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>

      <span class="toggleAside" @click="toggleAside"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
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
.topnav {
  position: relative;
  background: pink;
  display: flex;
  padding: 16px;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    .toggleAside {
      display: inline-block!important;
    }
    > .logo {
      margin: 0 auto;
    }
  }

  .toggleAside {
    display: none;
    width: 24px;
    height: 24px;
    background-color: #f40;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>