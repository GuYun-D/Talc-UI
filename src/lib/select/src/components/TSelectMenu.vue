<template>
  <div class="t-select-menu" v-show="isOpen" @click="handleMenuClick">
    <ul class="t-select-menu-ul" v-show="searchData.length !== 0">
      <li
        class="t-select-menu-item"
        @click="chooiceMenu(item)"
        v-for="(item, index) in searchData"
        :key="index"
        :class="{
          't-select-item-active': item.value === value,
          't-select-item-disabled': item.disabled,
        }"
      >
        {{ item.label }}
      </li>
    </ul>

    <t-select-none v-show="searchData.length === 0"></t-select-none>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  onBeforeUnmount,
  PropType,
  ref,
  Ref,
  watch,
} from "vue";
import { IData, ISelectMenuProps } from "../types";
import TSelectNone from "./TSelectNone.vue";

export default defineComponent({
  emits: ["update:isOpen", "chooice:menu"],
  props: {
    data: {
      type: Array as PropType<IData[]>,
      required: true,
    },
    value: String,
    searchKey: String,
    searchFilterDisabled: Boolean,
  },
  components: {
    TSelectNone,
  },
  setup(props: ISelectMenuProps, { emit }) {
    const isOpen = <Ref<boolean>>inject("openStatus");
    const searchData = ref<IData[]>(props.data);

    /**
     * 处理menu面板的点击
     */
    const handleMenuClick = () => {
      emit("update:isOpen", {
        open: false,
        from: "menu",
      });
    };

    /**
     * chooiceMenu
     */
    const chooiceMenu = (item: IData) => {
      if (item.disabled) return;
      emit("chooice:menu", item);
    };

    watch(
      () => props.searchKey,
      (newKey) => {
        searchData.value = _filterData(newKey);
      }
    );

    watch(
      () => isOpen.value,
      (value: boolean) => {
        if (!value) {
          searchData.value = props.data;
        }
      }
    );

    /**
     * 数据过滤
     * @param key 关键字
     * @returns 过滤后的数组
     */
    function _filterData(key: string): IData[] {
      if (key === "") {
        return props.data;
      }
      return props.data.filter((item: IData) => {
        if (props.searchFilterDisabled) {
          return (
            item.value.toLowerCase().includes(key.toLowerCase()) &&
            !item.disabled
          );
        } else {
          return item.value.toLowerCase().includes(key.toLowerCase());
        }
      });
    }

    onBeforeUnmount(() => {
      console.log("组件即将卸载");
    });

    return { isOpen, handleMenuClick, chooiceMenu, searchData };
  },
});
</script>

<style scoped lang="scss">
.t-select-menu {
  position: relative;
  margin-top: 12px;
  width: 240px;
  border-radius: 4px;
  box-shadow: 0 0 2px #ccc;

  ul {
    width: 100%;
    padding: 10px 0;
    color: rgb(37, 37, 37);

    li {
      width: 100%;
      height: 30px;
      height: 40px;
      font-size: 16px;
      padding: 10px;
      cursor: pointer;

      &.t-select-item-active {
        color: rgb(95, 180, 255);
        font-weight: bold;
      }

      &.t-select-item-disabled {
        color: #ccc;
        cursor: not-allowed;

        &:hover {
          background-color: transparent;
        }
      }

      &:hover {
        background-color: rgb(235, 235, 235);
      }
    }

    &::before {
      position: absolute;
      content: "";
      display: block;
      top: -20px;
      left: 10px;
      border: 10px solid #fff;
      border-top-color: transparent;
      border-left-color: transparent;
      border-right-color: transparent;
      filter: drop-shadow(rgb(209, 209, 209) 1px 0px 0px);
    }
  }
}
</style>