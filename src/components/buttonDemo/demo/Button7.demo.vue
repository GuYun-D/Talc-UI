<demo>
  按钮组
</demo>

<template>
  <div>
    <t-button-group>
      <t-button icon="left-arrow" theme="button">上一页</t-button>
      <t-button theme="button">更多</t-button>
      <t-button icon="right-arrow" iconPosition="right" theme="button"
        >下一页</t-button
      >
    </t-button-group>

    <t-button-group>
      <t-button level="danger" theme="button">删除</t-button>
      <t-button level="main" iconPosition="right" theme="button"
        >新建</t-button
      >
    </t-button-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TButton from "../../../lib/button/src/TButton.vue";
import TButtonGroup from "../../../lib/button-grounp/src/TButtonGroup.vue";

export default defineComponent({
  components: {
    TButton,
    TButtonGroup,
  },
  setup() {
    return {};
  },
});
</script>
