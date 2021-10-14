<demo>
  可清除
</demo>

<template>
  <div>
    <t-input :clearable="true" v-model:value="msg"></t-input>
    <div class="example">{{ msg }}</div>
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
    const msg = ref("你好呀");
    return {
      msg,
    };
  },
});
</script>

<style lang="scss" scoped>
.example{
  margin: 10px;
}
</style>