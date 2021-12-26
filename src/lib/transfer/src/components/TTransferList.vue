<template>
  <div class="t-transfer-input" @click="setChecked" :class="titleClasses">
    <div class="t-transfer-title">
      <span class="label talc ta-zhengque"></span>
      <span class="text">
        {{ title }}
      </span>
      <span class="prcentage"> 30/200 </span>
    </div>
    <div>
      {{ selectedArr }}
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
  width: 180px;
  margin: 0 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
  cursor: pointer;

  &.t-transfer-active {
    .t-transfer-title {
      span.label {
        background-color: $mainColor;
        border-color: $mainColor;
      }
    }
  }

  .t-transfer-title {
    display: flex;
    align-items: center;
    font-size: 0;

    span {
      font-size: 16px;
      display: inline-block;
      color: #111;
      overflow: hidden;
      transition: all 300ms;

      &:last-child {
        margin-left: 58px;
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
}
</style>