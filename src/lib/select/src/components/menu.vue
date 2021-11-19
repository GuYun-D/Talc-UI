<template>
  <div class="t-select-menu">
    <div
      class="t-select-menu-item"
      v-for="(item, index) in searchData"
      :key="index"
      @click="setItemValue(item)"
    >
      {{ item.text }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, watch } from "vue";
import { IMenuDataItem } from "../types";

export default defineComponent({
  name: "t-select-menu",
  props: {
    data: {
      type: Array as PropType<IMenuDataItem[]>,
      required: true,
    },
    searchValue: String,
  },
  setup(props, { emit }) {
    const searchData = ref<any[]>();
    onMounted(() => {
      searchData.value = props.data;
    });

    watch(
      () => {
        return props.searchValue;
      },
      (value: string) => {
        filterData(value);
      }
    );

    const filterData = (value: string) => {
      searchData.value = props.data.filter((item) => {
        return item.text
          .toLowerCase()
          .includes(props.searchValue.toLowerCase());
      });
    };

    const setItemValue = (item: IMenuDataItem) => {
      emit("setItemValue", item);
    };

    return { setItemValue, searchData };
  },
});
</script>

<style scoped lang="scss">
.t-select-menu {
  display: none;
  position: absolute;
  left: 0;
  top: 48px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  border-radius: 5px;
  cursor: pointer;
  z-index: 10;

  .t-select-menu-item {
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-size: 14px;
    color: #666;
    margin: 10px 0;
    transition: all 0.2s linear;

    &:hover {
      background-color: #ededed;
    }
  }
}
</style>