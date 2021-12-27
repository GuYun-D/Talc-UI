<template>
  <div class="t-transfer-input">
    <div class="t-transfer-title" @click="setChecked" :class="titleClasses">
      <span class="label talc ta-zhengque"></span>
      <span class="text">
        {{ title }}
      </span>
      <span class="prcentage"> 30/200 </span>
    </div>
    <div class="t-transfer-panel">
      <ul>
        <li v-for="item in selectedArr" :key="item.key">
         <span>1</span>  {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  reactive,
  ref,
  toRefs,
} from "vue";
import { ITransferInputProps, EType, IModelValue } from "../types/";

export default defineComponent({
  props: {
    title: String,
    type: {
      type: String,
      required: true,
      validator: (value: string) => {
        if (EType[value]) return true;
        console.warn("[Transfer Component Warning]: 穿梭框类型错误");
      },
    },
    selectedArr: Array as PropType<IModelValue[]>,
  },
  setup(props: ITransferInputProps) {
    const state = reactive({
      status: false,
    });

    const setChecked = () => {
      state.status = !state.status;
    };

    const titleClasses = computed(() => {
      return {
        "t-transfer-active": state.status,
      };
    });

    return {
      ...toRefs(state),
      titleClasses,
      setChecked,
    };
  },
});
</script>

<style scoped lang="scss">
$mainColor: #409eff;
.t-transfer-input {
  width: 200px;
  margin: 0 12px;
  border: 1px solid #ccc;
  border-radius: 4px;

  .t-transfer-title {
    height: 40px;
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 0;
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    &.t-transfer-active {
      span.label {
        background-color: $mainColor;
        border-color: $mainColor;
      }
    }

    span {
      font-size: 16px;
      display: inline-block;
      color: #111;
      overflow: hidden;
      transition: all 300ms;

      &:last-child {
        margin-left: 78px;
      }

      &.label {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 14px;
        height: 14px;
        color: #fff;
        border-radius: 4px;
        border: 1px solid rgb(146, 146, 146);

        &:hover {
          border-color: $mainColor;
        }
      }

      &.text {
        font-size: 18px;
        margin: 0 5px;
      }

      &.prcentage {
        color: rgb(156, 156, 156);
        font-size: 14px;
      }
    }
  }

  .t-transfer-panel {
    padding: 5px;

    ul {
      > li{
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>