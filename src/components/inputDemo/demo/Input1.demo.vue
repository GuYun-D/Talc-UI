<demo>
  基本用法
</demo>

<template>
  <div>
    <t-input v-model:value="msg" placeholder="请输入内容"></t-input>
    <span class="inp"> 输入的内容：{{ msg }} </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TInput from "../../../lib/input/src/TInput.vue";

export default defineComponent({
  components: {
    TInput,
  },
  setup() {
    const msg = ref("支持双向绑定");
    return { msg };
  },
});
</script>

<style lang="scss" scoped>
.inp {
  margin-left: 10px;
  color: rgb(245, 0, 0);

  @media (max-width: 500px) {
    display: block;
  }
}
</style>