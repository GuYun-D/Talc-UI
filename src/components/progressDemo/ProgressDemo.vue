<template>
  <div>
    <h1>progress 进度条</h1>
    <t-progress :percentage="40"></t-progress>
    <t-progress :percentage="40" status="warning"></t-progress>
    <t-progress
      :percentage="count"
      :textInside="true"
      status="success"
    ></t-progress>
    <t-progress :percentage="40" status="exception"></t-progress>
    <t-progress :percentage="10" :height="40"></t-progress>

    <t-button @click="setNum('add')">+</t-button>
    <t-button @click="setNum('inAdd')">-</t-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let count = ref(10);

    const setNum = (tag: string) => {
      if (tag === "add") {
        count.value += 10;
      } else {
        count.value -= 10;
      }
      
    };
    return { count, setNum };
  },
});
</script>
