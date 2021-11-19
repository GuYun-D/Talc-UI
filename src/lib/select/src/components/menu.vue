<template>
  <div class="t-select-menu">
    <div class="t-select-menu-item" v-for="(item, index) in data" :key="index">
      {{ item.text }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "t-select-menu",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.t-select-menu {
  display: none;
  position: absolute;
  left: 0;
  top: 48px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  border-radius: 5px;
  cursor: pointer;
  .t-select-menu-item {
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-size: 14px;
    color: #666;
    margin: 10px 0;
    transition: all .2s linear;

    &:hover{
      background-color: #ededed;
    }
  }
}
</style>