<template>
  <div>
    <h3>示例一</h3>
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
        <strong>标题</strong>
      </template>
    </Dialog>
    <Button @click="toggle">点击打开</Button>

    <h3>示例二</h3>
    <Button @click="showDialog">点击打开</Button>
  </div>
</template>

<script>
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
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

    // 一句话调用dialog
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "你好",
        confirm(){
        },

        cancel(){

        }
      });
    };

    return { x, toggle, confirm, cancel, showDialog };
  },
};
</script>

<style lang="scss">
h3 {
  color: #42b983;
  margin: 20px 0;
}
</style>