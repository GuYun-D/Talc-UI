<template>
  <div>
    <t-button @click="toggleToast">toast</t-button>
    <t-toast
      :visible="isShowToast"
      :closeButton="closeButtonObj"
      :enableHtml="false"
      :autoClose="true"
      @update:visible="isShowToast = $event"
      @toastClose="toastClose"
    >
      我是一个toast
      <template #toastHtml>
        <strong>haha</strong>
        <p>尼玛</p>
        <mark>操</mark>
        <div>我来了</div>
        <p>日你妈日你妈日你妈日你妈日你妈日你妈日你妈日你妈日你妈</p>
        <p>日你妈日你妈日你妈日你妈日你妈日你妈日你妈日你妈日你妈</p>
        <p>日你妈日你妈日你妈日你妈日你妈日你妈日你妈日你妈日你妈</p>
      </template>
    </t-toast>
    <t-toast :visible="isShowToast" position="middle">123456</t-toast>
    <t-toast :visible="isShowToast" position="bottom">123456</t-toast>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const isShowToast = ref(false);
    const toggleToast = () => {
      isShowToast.value = !isShowToast.value;
    };
    const closeButtonObj = {
      text: "关闭",
      callBack: function () {
        console.log("执行了回调");
      },
    };
    const toastClose = () => {
      alert("toast 要关闭了");
    };
    return { isShowToast, toggleToast, closeButtonObj, toastClose };
  },
});
</script>

<style scoped>
</style>