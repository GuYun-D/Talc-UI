<template>
  <div>
    <h1>radio 单选</h1>

    <div>
      <t-radio-group v-model="checked">
        <t-radio
          v-for="(item, index) in options"
          :key="index"
          :option="item"
        ></t-radio>
      </t-radio-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let checked = ref();

    const options = [
      {
        label: "男",
        value: "male",
      },
      {
        label: "女",
        value: "female",
      },
      {
        label: "人妖",
        value: "male && female",
      },
    ];

    return { checked, options };
  },
});
</script>

<style scoped>
</style>