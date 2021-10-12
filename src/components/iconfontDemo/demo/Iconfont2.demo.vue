<demo>
  基本用法
</demo>

<template>
  <div>
    <div class="svg">
      <strong>SVG形式:</strong>
      <svg class="icon">
        <use xlink:href="#ta-delete"></use>
      </svg>

      <svg class="icon">
        <use xlink:href="#ta-msg"></use>
      </svg>

      <svg class="icon">
        <use xlink:href="#ta-menu"></use>
      </svg>
    </div>

    <div class="claa-name">
      <strong>class类名形式:</strong>
      <i class="talc ta-fasong"></i>
      <i class="talc ta-user"></i>
      <i class="talc ta-simple-setting"></i>
    </div>
  </div>
</template>

<script lang="ts">
import TIcon from "../../../lib/iconfont/src/TIcon.vue";
import { defineComponent } from "vue";
import '../../../lib/iconfont/font/iconfont'

export default defineComponent({
  components: {
    TIcon,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import url("../../../lib/iconfont/font/font.css");

.icon, .talc{
  font-size: 50px;
  vertical-align: middle;
  margin-left: 10px;
  color: purple;
}

.svg{
  margin: 10px;
}
</style>
