<template>
  <div>
    <h3>示例一</h3>
    <Dialog></Dialog>
  </div>
</template>

<script>
import Dialog from "../lib/Dialog.vue";
export default {
  name: "DialogDemo",
  components: {
    Dialog,
  },
};
</script>

<style lang="scss">
h3 {
  color: #42b983;
  margin: 20px 0;
}
</style>