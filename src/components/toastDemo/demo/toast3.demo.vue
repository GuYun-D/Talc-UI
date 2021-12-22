<demo>
  支持HTML
</demo>

<template>
  <div>
    <t-button @click="toggleToast">打开</t-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { openToast } from "../../../lib/toast";

export default defineComponent({
  setup() {
    const toggleToast = () => {
      openToast({
        defaultText: "支持html",
        props: {
          position: "middle",
          enableHtml: true,
          toastHTML: `
            <ul>
              <li>1.Vue</li>
              <li>2.React</li>
              <li>3.Anglar</li>
            </ul>
          `,
        },
      });
    };
    return { toggleToast };
  },
});
</script>