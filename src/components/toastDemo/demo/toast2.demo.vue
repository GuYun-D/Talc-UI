<demo>
  自动关闭
</demo>

<template>
  <div>
    <t-button @click="toggleToast">自动关闭</t-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { openToast } from "../../../lib/toast";

export default defineComponent({
  setup() {
    const toggleToast = () => {
      openToast({
        defaultText: "2秒后我会自动关闭",
        props: {
          position: "middle",
          autoCloseDelay: 2
        },
      });
    };
    return { toggleToast };
  },
});
</script>