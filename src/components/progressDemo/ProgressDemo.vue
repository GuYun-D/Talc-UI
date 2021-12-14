<template>
  <div>
    <h1>progress 进度条</h1>
    <t-progress
      :percentage="count"
      :textInside="true"
      status="success"
    ></t-progress>

    <t-progress
      :percentage="count"
      :textInside="true"
      status="normal"
      :loading="true"
    ></t-progress>

    <t-progress
      :percentage="count"
      :textInside="true"
      status="warning"
    ></t-progress>

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
        if (count.value + 10 <= 100) count.value += 10;
      } else {
        if (count.value - 10 >= 0) count.value -= 10;
      }
    };
    return { count, setNum };
  },
});
</script>
