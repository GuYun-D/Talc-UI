<template>
  <div class="t-progress">
    <t-line-bar
      :percentage="value"
      :statusColor="statusColor"
      :height="height"
      :statusTipType="statusTipType"
      :textInside="textInside"
      :loading="loading"
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

    percentage: {
      type: Number,
      required: true,
      validator: (value: number) => {
        if (value >= 0 && value <= 100) return true;
        throw new Error("[Progress Component Error]: value out of range");
      },
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

    loading: {
      type: Boolean,
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
      value: props.percentage,
      statusColor: statusType[props.status] || "#409eff",
      statusTipType: statusTip[props.status] || "",
    });

    watch(
      () => props.percentage,
      (value: number) => {
        state.value = value;
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