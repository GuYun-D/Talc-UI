<template>
  <div class="t-tarnsfer">
    <TTransferInput :title="titles[0]" type="target" :selectedArr="selectArr">
    </TTransferInput>
    <div class="t-transfer-buttons">
      <slot>
        <t-button class="talc ta-left-arrow"></t-button>
        <t-button class="talc ta-right-arrow"></t-button>
      </slot>
    </div>
    <TTransferInput :title="titles[1]" type="selected"> </TTransferInput>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from "vue";
import { ITransferProps, IModelValue } from "./types/";
import TTransferInput from "./components/TTransferList.vue";

export default defineComponent({
  name: "t-transfer",
  emits: ["update:modelValue"],
  components: {
    TTransferInput,
  },
  props: {
    modelValue: Array as PropType<IModelValue[]>,
    titles: {
      type: Array as PropType<string[]>,
      default: ["title1", "title2"],
      validator: (value: string[]) => {
        let length = value.length;
        if (length > 0 && length === 2) return true;
        throw new Error(
          "[Transfer Component warning]: 组件检测到你传入的title数据不全或者冗余，如果你要修改穿梭框的title，请确保传入的数据完整"
        );
      },
    },
    selectArr: Array as PropType<IModelValue[]>,
  },

  setup(props: ITransferProps, { emit }) {
    const state = reactive({
      targetArr: props.modelValue,
      selectArr: props.selectArr,
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style scoped lang="scss">
.t-tarnsfer {
  display: flex;
}
</style>