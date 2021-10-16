<template>
  <div>
    <t-row :gutter="10">
      <t-col>1</t-col>
      <t-col>2</t-col>
    </t-row>
    <t-row>
      <t-col>1</t-col>
      <t-col>2</t-col>
          我日你妈

      <t-col>3</t-col>
    </t-row>
    <t-row>
      <t-col>1</t-col>
      <t-col>2</t-col>
      <t-col>3</t-col>
      <t-col>4</t-col>
    </t-row>

    <t-row>
      <t-col :span="4">1</t-col>
      <t-col :span="20">2</t-col>
    </t-row>

    <t-row>
      <t-col :span="3">1</t-col>
      <t-col :span="21" :offset="2">2</t-col>
    </t-row>

    <t-row>
      <t-col :span="3">1</t-col>
      <t-col :span="21" :offset="2">2</t-col>
    </t-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TRow from "../../lib/grid/src/TRow.vue";
import TCol from "../../lib/grid/src/TRow.vue";

export default defineComponent({
  components: {
    TRow,
    TCol,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>