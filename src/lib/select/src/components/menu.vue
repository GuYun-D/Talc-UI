<template>
  <div class="t-select-menu" ref="tSelectMenuRef">
    <template v-if="searchData?.length > 0">
      <div
        class="t-select-menu-item"
        :class="{
          selected: inputValue === item.value,
          'selected-sider': instanceId === index,
        }"
        v-for="(item, index) in searchData"
        :key="index"
        @click="setItemValue(item)"
      >
        {{ item.text }}
      </div>
    </template>

    <TSelectNoDataTip v-else></TSelectNoDataTip>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  PropType,
  ref,
  watch,
} from "vue";
import { IMenuDataItem } from "../types";
import TSelectNoDataTip from "./no-data.vue";
import { emitter } from "../../../utils";

enum keyOpMenu {
  addition = "addition",
  subtraction = "subtraction",
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
    let instanceId = ref(0);

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

    const searchDataLen = computed(() => {
      return searchData.value.length;
    });

    let items: HTMLDivElement[];

    onMounted(() => {
      items = Array.prototype.slice.call(
        tSelectMenuRef.value.getElementsByClassName("t-select-menu-item")
      );

      setInstacneIndex();

      emitter.on("menu:select", (opTag: string) => {
        switch (opTag) {
          case keyOpMenu.addition:
            instanceId.value++;
            if (instanceId.value > searchDataLen.value) {
              instanceId.value = 0;
            }
            break;
          case keyOpMenu.subtraction:
            instanceId.value--;
            if (instanceId.value < 0) {
              instanceId.value = searchDataLen.value;
            }
            break;
        }
      });

      emitter.on("input:focus", () => {
        setInstacneIndex();
      });

      emitter.on("menu:confirm", () => {
        const arr = Array.prototype.slice.call(
          tSelectMenuRef.value.children
        ) as HTMLDivElement[];
        let confirmIndex = arr.findIndex((item) => {
          return item.className.includes("selected-sider");
        });

        emit("setItemValue", searchData.value[confirmIndex]);
      });

      function setInstacneIndex() {
        instanceId.value = items.findIndex((item) => {
          return item.className.includes("selected");
        });
      }
    });

    return { setItemValue, searchData, tSelectMenuRef, instanceId };
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
  cursor: pointer;
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
    transition: all 0.2s linear;

    &:hover {
      background-color: $bgc;
    }
  }
}
</style>