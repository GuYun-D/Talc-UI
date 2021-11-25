<template>
  <div>
    <h1>select 选择器</h1>

    <demo :component="Select1Demo"></demo>

    <demo :component="Select2Demo"></demo>

    <demo :component="Select3Demo"></demo>

    <demo :component="Select4Demo"></demo>

    <demo :component="Select5Demo"></demo>

    <Attribute :attributeConfig="attributeConfig"></Attribute>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import Demo from "../Demo.vue";
import Select1Demo from "./demo/select1.demo.vue";
import Select2Demo from "./demo/select2.demo.vue";
import Select3Demo from "./demo/select3.demo.vue";
import Select4Demo from "./demo/select4.demo.vue";
import Select5Demo from "./demo/select5.demo.vue";
import { attributeConfig } from "./config/attribute.config";

export default defineComponent({
  components: {
    Demo,
  },
  setup() {
    return {
      attributeConfig,
      Select1Demo,
      Select2Demo,
      Select3Demo,
      Select4Demo,
      Select5Demo,
    };
  },
});
</script>

<style scoped>
</style>