<template>
  <div class="t-cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      {{ selectedRes || cascaderPlaceholder }}
    </div>
    <div class="popover" v-if="popoverVisible">
      <t-cascader-item
        :style="{ height: popoverHeight + 'px' }"
        :items="dataSource"
        :selected="selected"
        @update:cascader-selected="changeSelected"
      ></t-cascader-item>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { ISelectedItem } from "../../types";

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
    selected: {
      type: Array,
      default: () => [],
    },
    cascaderPlaceholder: {
      type: String,
      default: "请选择",
    },
  },
  setup(props, { emit }) {
    const popoverVisible = ref(false);
    const changeSelected = (newSelected) => {
      emit("update:changeSelected", newSelected);
    };

    const selectedRes = computed(() => {
      return props.selected.map((item: ISelectedItem) => item.name).join(" / ");
    });
    return {
      popoverVisible,
      changeSelected,
      selectedRes,
    };
  },
});
</script>

<style scoped lang="scss">
.t-cascader {
  position: relative;

  .trigger {
    box-sizing: border-box;
    border: 1px solid rgb(211, 211, 211);
    display: inline-flex;
    min-width: 10em;
    height: 32px;
    align-items: center;
    border-radius: 4px;
    padding: 0 1em;
    color: rgb(87, 87, 87);
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