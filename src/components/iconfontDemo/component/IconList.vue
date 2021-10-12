<template>
  <div>
    <span class="title">Icon List</span>
    <ul>
      <li v-for="icon in iconListConfig" :key="icon.taName">
        <t-icon :icon="icon.iconClass"></t-icon>
        <div class="icon-name">{{ icon.taName }}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TIcon from "../../../lib/iconfont/src/TIcon.vue";
import { iconListConfig } from "../config/iconList.config";

export default defineComponent({
  components: {
    TIcon,
  },
  setup() {
    return { iconListConfig };
  },
});
</script>

<style scoped lang="scss">
$main: rgb(66, 185, 131);

.title {
  color: #111;
  font-size: 30px;
}

ul {
  font-size: 0;
  width: 100%;
  padding: 10px 0;

  li {
    font-size: 16px;
    width: 16.6%;
    height: 120px;
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    border: 1px solid rgb(228, 226, 227);

    @media (max-width: 700px) {
      width: 20%;
    }

    &:hover {
      .icon-name {
        color: $main;
      }

      .t-icon {
        fill: $main;
      }
    }
    .icon-name {
      color: #666;
      margin-top: 10px;
      text-align: center;
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    .t-icon {
      fill: #666;
      font-size: 36px;
      transition: all 250ms;
    }
  }
}
</style>
