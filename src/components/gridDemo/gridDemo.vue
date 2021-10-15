<template>
  <div>
    <t-row :gutter="10">
      <t-col>1</t-col>
      <t-col>2</t-col>
    </t-row>
    <t-row>
      <t-col>1</t-col>
      <t-col>2</t-col>
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
      <t-col :span="2">1</t-col>
      <t-col :span="22">2</t-col>
    </t-row>

    <t-row>
      <t-col :span="2">1</t-col>
      <t-col :span="22" :offset="2">2</t-col>
    </t-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TRow from "../../lib/grid/src/TRow.vue";
import TCol from "../../lib/grid/src/TCol.vue";

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