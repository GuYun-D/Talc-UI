<template>
  <div class="t-cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <!-- <slot></slot> -->
    </div>
    <div class="popover" v-if="popoverVisible">
      <t-cascader-item
        :style="{ height: popoverHeight + 'px' }"
        :items="dataSource"
      ></t-cascader-item>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "t-cascader",
  props: {
    "data-source": {
      type: Array,
      required: true,
    },
    popoverHeight: {
      type: String,
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
  position: relative;

  .trigger {
    border: 1px solid rgb(211, 211, 211);
    width: 100px;
    height: 32px;
    border-radius: 4px;
  }

  .popover {
    position: absolute;
    top: 130%;
    left: 0;
    display: flex;
    box-shadow: 0px 5px 3px rgba(243, 243, 243, 0.25);
    border-radius: 4px;
    background-color: #fff;
    filter: drop-shadow(0px 1px 1px rgb(189, 189, 189));

    &::after {
      content: "";
      display: block;
      position: absolute;
      border: 10px solid rgb(255, 255, 255);
      border-top-color: transparent;
      border-left-color: transparent;
      border-right-color: transparent;
      top: -19px;
      left: 20px;
    }
  }
}
</style>