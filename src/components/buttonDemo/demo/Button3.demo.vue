<demo>
  支持theme属性，修改按钮颜色
</demo>  

<template>
  <div>
    <t-button level="main">主要按钮</t-button>
    <t-button>普通按钮</t-button>
    <t-button level="danger">危险按钮</t-button>
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