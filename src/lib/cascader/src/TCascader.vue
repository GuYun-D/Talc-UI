<template>
  <div class="t-cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <!-- <slot></slot> -->
    </div>
    <div class="popover" v-if="popoverVisible">
      <t-cascader-item :items="dataSource"></t-cascader-item>
    </div>

    <!-- <div class="popover">
      <div v-for="item in dataSource" :key="item.name">
        <t-cascader-item :sourceItem="item"></t-cascader-item>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import {  defineComponent, ref } from "vue";

export default defineComponent({
  name: "t-cascader",
  props: {
    "data-source": {
      type: Array,
      required: true,
    },
  },
  setup() {
    const popoverVisible = ref(false);
    return {
      popoverVisible,
    };
  },
});
</script>

<style scoped lang="scss">
.t-cascader {
  .trigger {
    border: 1px solid #f40;
    width: 100px;
    height: 32px;
  }

  .popover {
    display: flex;
    border: 1px solid #f40;
    width: 100px;
    height: 200px;

    .wrapper {
      white-space: nowrap;
    }
  }
}
</style>