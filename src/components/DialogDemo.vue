<template>
  <div>
    <h3>示例一</h3>
    <Dialog
      :confirm="confirm"
      :cancel="cancel"
      :closeOnClickOverlay="true"
      :visible="x"
      @updata:visible="x = $event"
      title="自定义标题"
    >
      <div>你好</div>
      <div>Dialog</div>
    </Dialog>
    <Button @click="toggle">点击打开</Button>
  </div>
</template>

<script>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  name: "DialogDemo",
  components: {
    Dialog,
    Button,
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

    return { x, toggle, confirm, cancel };
  },
};
</script>

<style lang="scss">
h3 {
  color: #42b983;
  margin: 20px 0;
}
</style>