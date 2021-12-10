<demo>
动态添加
</demo>

<template>
  <div>
    <t-tag v-for="(tag, index) in tags" :key="index" :closeable="true">{{ tag }}</t-tag>
    <t-tag-input @addTag="handleAddTarget"></t-tag-input>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      tags: ["HTML", "CSS", "JavaScript"],
    });

    const handleAddTarget = (tag: string) => {
      state.tags.push(tag);
    };

    return { ...toRefs(state), handleAddTarget };
  },
});
</script>

<style scoped>
.t-tag {
  margin: 5px;
}


</style>