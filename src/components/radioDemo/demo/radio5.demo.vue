<demo>
单选组
</demo>

<template>
  <div>
    <em>横向</em>
    <t-radio-group v-model="checked">
      <t-radio
        v-for="(item, index) in options"
        :key="index"
        :option="item"
      ></t-radio>
    </t-radio-group>

    <em>纵向</em>
    <t-radio-group v-model="checked" :vertical="true">
      <t-radio
        v-for="(item, index) in options"
        :key="index"
        :option="item"
      ></t-radio>
    </t-radio-group>
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
    ];
    return { checked, options };
  },
});
</script>

<style scoped>
.t-radio {
  margin: 10px 15px;
}
</style>