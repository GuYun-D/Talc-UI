<demo>
  支持添加图标
</demo>  

<template>
  <div>
    <t-button icon="delete" iconPosition="left">文本形式</t-button>
    <t-button icon="menu" iconPosition="right">文本形式</t-button>
    <t-button icon="menu" level="main" iconPosition="right">文本形式</t-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TButton from "../../../lib/button/src/TButton.vue";

export default defineComponent({
  components: {
    TButton,
  },
  setup() {
    return {};
  },
});
</script>
