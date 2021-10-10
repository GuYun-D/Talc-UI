<demo>
  基本用法
</demo>

<template>
  <div>
    <t-button> 默认按钮 </t-button>
    <t-button theme="button">普通按钮</t-button>
    <t-button theme="link">链接形式</t-button>
    <t-button theme="text">文本形式</t-button>
  </div>
</template>

<script lang="ts">
import TButton from "../../../lib/button/src/TButton.vue";
export default {
  components: {
    TButton,
  },
};
</script>

<style lang="scss" scoped></style>
