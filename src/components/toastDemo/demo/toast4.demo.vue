<demo>
  自定义关闭样式
</demo>

<template>
  <div>
    <t-button @click="toggleToast">打开</t-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { openToast } from "../../../lib/toast";

export default defineComponent({
  setup() {
    const toggleToast = () => {
      openToast({
        defaultText: "自定义关闭样式",
        props: {
          position: "top",
          closeButton: {
            text: "知道了",
            callBack: () => {
              alert("执行了回调");
            },
          },
        },
      });
    };
    return { toggleToast };
  },
});
</script>