<demo>
  支持type，placeHolder等input元素支持的属性
</demo>

<template>
  <div>
    <div>placeholder: <t-input placeholder="请输入内容"></t-input></div>
    <div>
      type:
      <t-input type="text" placeholder="文字输入框"></t-input>
      <t-input type="password" placeholder="密码输入框"></t-input>
    </div>
    <div>
      disabled: <t-input disable value="禁止的"></t-input>
      readonly：<t-input :readonly="true" value="只读的"></t-input>
      <p class="desc">这两者的区别就是添加了readonly的输入框是允许表单foucs的</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TInput from "../../../lib/input/src/TInput.vue";

export default defineComponent({
  components: {
    TInput,
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.desc{
  color: #f8df70;
}
</style>