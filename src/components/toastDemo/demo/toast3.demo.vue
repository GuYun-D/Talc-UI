<demo>
  支持HTML
</demo>

<template>
  <div>
    <t-button @click="toggleToast">打开</t-button>

    <t-toast
      :enableHtml="true"
      :visible="isShowToast"
      :autoClose="true"
      @update:visible="isShowToast = $event"
    >
      <template #toastHtml>
        <em>haha</em>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </template>
    </t-toast>
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
    return { isShowToast, toggleToast };
  },
});
</script>