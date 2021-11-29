<template>
  <div>
    <h1>radio 单选</h1>
    <t-radio v-model="checked" :option="option"></t-radio>

    {{ checked }}

    <!-- <t-radio v-model="checked2" size="big" :disabled="true">男</t-radio>

    <t-radio v-model="checked3" size="small" :disabled="true">男</t-radio>

    <t-radio v-model="checked4" active-color="#f40">男</t-radio> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let checked = ref();
    // let checked2 = ref(true);
    // let checked3 = ref(true);
    // let checked4 = ref(false);

    const option = {
      label: "男",
      value: "male",
    };

    return { checked, option };
  },
});
</script>

<style scoped>
</style>