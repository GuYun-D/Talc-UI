<demo>
  输入框长度限制
</demo>

<template>
  <div>
    <t-input v-model:value="msg" maxLength="10"></t-input>
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
    const msg = ref("");
    return {
      msg,
    };
  },
});
</script>