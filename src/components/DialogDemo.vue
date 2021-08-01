<template>
  <div>
    <h3>示例一</h3>
    <Dialog
      :confirm="confirm"
      :cancel="cancel"
      :closeOnClickOverlay="false"
      :visible="x"
      @updata:visible="x = $event"
    ></Dialog>
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
      return false
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