<template>
  <div>
    <div class="topnav" :style="docBgc">
      <div class="logo">
        <img src="../assets/(zhaoxi.net).png" alt="" />

        <router-link to="/">Talc UI</router-link>
      </div>
      <ul class="menu">
        <li>
          <router-link :class="{ home: colorStyle === 'home' }" to="/doc"
            >文档</router-link
          >
        </li>
        <li>
          <router-link :class="{ home: colorStyle === 'home' }" to=""
            >Github</router-link
          >
        </li>
      </ul>

      <svg
        v-if="toggleMenuButtonVisible"
        class="toggleAside"
        @click="toggleAside"
      >
        <use xlink:href="#icon-caidan"></use>
      </svg>
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

    colorStyle: {
      type: String,
    },

    docBgc: Object
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  color: #fff;
  display: flex;
  padding: 16px 48px;
  z-index: 10;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(233, 233, 233);

  > .logo {
    max-width: 8em;
    font-size: 24px;
    margin-right: auto;

    a {
      color: rgb(79, 192, 141) !important;
    }

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
      a.home {
        color: #fff;
      }
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
