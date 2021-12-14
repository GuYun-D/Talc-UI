<template>
  <div class="t-progress">
    <t-line-bar
      :percentage="value"
      :statusColor="statusColor"
      :height="height"
      :statusTipType="statusTipType"
      :textInside="textInside"
    ></t-line-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from "vue";
import { EProgressType, IProgressProps } from "./types";
import TLineBar from "./components/TLineBar.vue";

export default defineComponent({
  name: "t-progress",
  emits: ["update:modelValue"],
  components: {
    TLineBar,
  },
  props: {
    type: {
      type: String,
      default: "line",
      validator: (value: string) => {
        if (EProgressType[value]) return true;
        console.warn(
          "[Progress Component Warning]: The type of progress only supports circle and line"
        );
      },
    },

    modelValue: {
      type: Number,
      required: true,
    },

    height: Number,

    status: {
      type: String,
      default: "normal",
    },

    textInside: {
      tpe: Boolean,
      default: false,
    },
  },

  setup(props: IProgressProps, { emit }) {
    const statusType = {
      normal: "#409eff",
      success: "#67c23a",
      warning: "#e6a23c",
      exception: "#f56c6c",
    };

    const statusTip = {
      normal: "",
      success: "ta-kongxinduigou",
      warning: "ta-gantanhao",
      exception: "ta-chahao",
    };

    const state = reactive({
      value: props.modelValue,
      statusColor: statusType[props.status] || "#409eff",
      statusTipType: statusTip[props.status] || "",
      percentage: props.modelValue,
    });

    watch(
      () => props.modelValue,
      (value: number) => {
        if (value > 100) emit("update:modelValue", 100);
        else if (value < 0) emit("update:modelValue", 0);
        else state.value = value;
      },
      {
        immediate: true,
      }
    );

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style scoped lang="scss">
</style>