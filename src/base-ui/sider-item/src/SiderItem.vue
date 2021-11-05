<template>
  <div class="sider-item">
    <h4>{{ itemTitle }}</h4>
    <ul>
      <li v-for="list in componentList" :key="list.name">
        <router-link :to="list.url">{{ list.name }}</router-link>
      </li>
      
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ISiderItemComponent } from "./type";

export default defineComponent({
  name: "sider-item",
  props: {
    itemTitle: {
      type: String,
      required: true,
    },
    componentList: {
      type: Array as PropType<ISiderItemComponent[]>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
$main: #4fc08d;
@font-face {
  font-family: Ironwall;
  src: url("../../../assets/Ironwall-JRvyj.otf");
}

.sider-item {
  h4 {
    padding-left: 5px;
    padding-bottom: 10px;
    font-size: 35px;
    font-family: Ironwall;
    color: $main;
    user-select: none;
  }
  li {
    height: 40px;
    line-height: 40px;
    transition: all 250ms;

    &:hover {
      background-color: rgb(238, 238, 238);
    }

    > a {
      display: block;
      padding-left: 25px;
      font-size: 16px;
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
</style>