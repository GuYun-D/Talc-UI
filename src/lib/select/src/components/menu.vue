<template>
  <div class="t-select-menu" ref="tSelectMenuRef" @click="clickMenu">
    <template v-if="searchData?.length > 0">
      <div
        class="t-select-menu-item"
        :class="{
          selected: inputValue === item.value,
          'selected-sider': selctedIndex === index,
        }"
        v-for="(item, index) in searchData"
        :key="index"
        @click="setItemValue(item, index)"
      >
        {{ item.text }}
      </div>
    </template>

    <TSelectNoDataTip v-else></TSelectNoDataTip>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  onMounted,
  PropType,
  reactive,
  ref,
  watch,
  toRefs,
} from "vue";
import { IMenuDataItem } from "../types";
import TSelectNoDataTip from "./no-data.vue";
import { emitter } from "../../../utils";

enum keyOpEnum {
  addition = "addition",
  subtraction = "subtraction",
}

enum menuVisibleEnum {
  show = "show",
  hidden = "hidden",
}

export default defineComponent({
  name: "t-select-menu",
  props: {
    data: {
      type: Array as PropType<IMenuDataItem[]>,
      required: true,
    },
    searchValue: String,
    inputValue: String,
  },
  components: {
    TSelectNoDataTip,
  },
  setup(props, { emit }) {
    const searchData = ref<any[]>();
    const tSelectMenuRef = ref<HTMLDivElement>();

    const state = reactive({
      selctedIndex: -1,
      searchDataLen: 0,
      items: [],
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

    const setItemValue = (item: IMenuDataItem, index: number) => {
      emit("setItemValue", item);
      state.selctedIndex = index;
    };

    /**
     * 点击menu面板，不关闭
     */
    const clickMenu = (e: MouseEvent) => {
      let targetEl = e.target as HTMLDivElement;
      let classesName = targetEl.className.split(" ");

      if (classesName.includes("t-select-menu")) {
        emitter.emit("menu:close", true);
      } else {
        emitter.emit("menu:close", false);
      }
    };

    onMounted(() => {
      searchData.value = props.data;
      state.searchDataLen = searchData.value.length;

      /**
       * 获取当前组件的子元素，也就是渲染出来的数据
       * 并初始化当前选中数据的索引
       */
      setTimeout(async () => {
        await nextTick();
        state.items = Array.prototype.slice.call(tSelectMenuRef.value.children);
        state.selctedIndex = state.items.findIndex((item: HTMLDivElement) => {
          return item.className.includes("selected");
        });
      });

      /**
       * 文本框聚焦和失去焦点时控制本组件的显示与隐藏
       */
      emitter.on("menu:visible", (menuVisible: menuVisibleEnum) => {
        switch (menuVisible) {
          case menuVisibleEnum.show:
            tSelectMenuRef.value.style.display = "block";
            break;

          case menuVisibleEnum.hidden:
            tSelectMenuRef.value.style.display = "none";
            break;
        }
      });

      /**
       * @param opTag 指示按了键盘上键还是下键
       */
      emitter.on("menuKey:select", (opTag: keyOpEnum) => {
        if (opTag === keyOpEnum.addition) {
          state.selctedIndex++;
          if (state.selctedIndex > state.items.length) {
            state.selctedIndex = 0;
          }
        } else if (opTag === keyOpEnum.subtraction) {
          state.selctedIndex--;
          if (state.selctedIndex < 0) {
            state.selctedIndex = state.items.length;
          }
        }
      });

      /**
       * 用户点击了enter
       */
      emitter.on("menu:confirm", () => {
        if (state.selctedIndex === -1) return;
        emit("setItemValue", searchData.value[state.selctedIndex]);
      });
    });

    return {
      setItemValue,
      searchData,
      tSelectMenuRef,
      ...toRefs(state),
      clickMenu,
    };
  },
});
</script>

<style scoped lang="scss">
$main: #fff;
$shadowColor: #ddd;
$bgc: #ededed;

.t-select-menu {
  display: none;
  position: absolute;
  left: 0;
  top: 55px;
  width: 100%;
  background-color: $main;
  box-shadow: 0 0 10px $shadowColor;
  border-radius: 5px;
  z-index: 10;

  .selected {
    color: #1890ff !important;
    font-weight: bold;
    background-color: rgba(206, 226, 255, 0.5);
  }

  .selected-sider {
    background-color: $bgc;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    border: 10px solid $main;
    border-right-color: transparent;
    border-left-color: transparent;
    border-top-color: transparent;
    top: -20px;
    left: 35px;
    filter: drop-shadow(rgb(209, 209, 209) 1px 0px 0px);
  }

  .t-select-menu-item {
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-size: 14px;
    color: #666;
    margin: 10px 0;
    cursor: pointer;
    transition: background-color 0.2s linear;

    &:hover {
      background-color: $bgc;
    }
  }
}
</style>