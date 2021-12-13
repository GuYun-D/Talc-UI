<template>
  <div>
    <div class="sider-item" v-for="item in componentList" :key="item.name">
      <h4>{{ item.titleName }}</h4>
      <ul>
        <li v-for="componentItem in item.list" :key="componentItem.name">
          <router-link :to="'/doc/' + componentItem.url">{{
            componentItem.name
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ISiderItemComponent } from "./type";

export default defineComponent({
  name: "sider-item",
  props: {
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
  font-family: ItalianDemo;
  src: url("../../../assets/ItalianDemo-2OY5K.otf");
}

.sider-item {
  h4 {
    padding: 10px 10px 10px 10px;
    font-size: 23px;
    font-family: ItalianDemo;
    color: rgb(97, 97, 97);
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
      color: #454d64;
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
</style>