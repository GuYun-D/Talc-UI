<demo>
  支持size属性
</demo>  

<template>
  <div>
    <t-button>normal</t-button>
    <t-button size="big">big</t-button>
    <t-button size="small">small</t-button>
  </div>
</template>

<script lang="ts">
import TButton from "../../../lib/button/index";
export default {
  components: {
    TButton,
  },
};
</script>