<template>
  <div>
    <!-- 
    <t-input @change="handleValueChange" value="事件监听"></t-input>
    <t-input @input="handleValueChange" value="input事件"></t-input>
    <t-input @blur="handleValueChange" value="blur事件"></t-input>
    <t-input @focus="handleValueChange" value="focus事件"></t-input> -->

    <h1>Input输入框</h1>
    <Demo :component="Input1Demo"></Demo>
    <Demo :component="Input2Demo"></Demo>
    <Demo :component="Input3Demo"></Demo>
    <Demo :component="Input4Demo"></Demo>
    <Demo :component="Input5Demo"></Demo>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TInput from "../../lib/input/src/TInput.vue";
import Demo from "../Demo.vue";
import Input1Demo from "./demo/Input1.demo.vue";
import Input2Demo from "./demo/Input2.demo.vue";
import Input3Demo from "./demo/Input3.demo.vue";
import Input4Demo from "./demo/Input4.demo.vue";
import Input5Demo from "./demo/Input5.demo.vue";

export default defineComponent({
  components: {
    TInput,
    Demo,
  },
  setup() {
    const msg = ref("双向绑定");

    const handleValueChange = (value: any) => {
      console.log(value);
    };
    return {
      handleValueChange,
      msg,
      Input1Demo,
      Input2Demo,
      Input3Demo,
      Input4Demo,
      Input5Demo,
    };
  },
});
</script>

<style scoped lang="scss"></style>
