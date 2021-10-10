<demo>
  loading状态
</demo>

<template>
  <div>
    <t-button loading>加载中</t-button>
    <t-button :loading="true">加载中</t-button>
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
