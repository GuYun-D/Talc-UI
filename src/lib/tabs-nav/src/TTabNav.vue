<template>
  <div class="t-tab-nav">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "t-tab-nav",
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.t-tab-nav{
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;

  > .actions-wrapper{
    margin-left: auto;
  }
}
</style>