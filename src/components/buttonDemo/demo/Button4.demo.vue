<demo>
  禁用按钮
</demo>  

<template>
  <div>
    <t-button disabled level="main">禁用的按钮</t-button>
    <t-button :disabled="true">禁用的按钮</t-button>
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