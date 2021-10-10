<demo>
  基本用法
</demo>  

<template>
  <div>
    <Dialog
      :confirm="confirm"
      :cancel="cancel"
      :closeOnClickOverlay="true"
      :visible="x"
      @update:visible="x = $event"
    >
      <template v-slot:content>
        <strong>dialog 组件</strong>
        <div><em>好啊好啊</em></div>
      </template>

      <template v-slot:title>
        <strong>标题支持HTML标签</strong>
      </template>
    </Dialog>
    <Button @click="toggle">点击打开</Button>
  </div>
</template>

<script>
import Dialog from "../../../lib/Dialog.vue";
import Button from "../../../lib/button/src/Button.vue";
import { ref } from "vue";
export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };

    const confirm = () => {
      // 如果return false说明不通过，dialog不会关闭
      // return false
    };

    const cancel = () => {
      console.log("用户已取消");
    };

    return {toggle, confirm, cancel, x };
  }
};
</script>