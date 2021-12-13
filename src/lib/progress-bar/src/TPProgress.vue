<template>
  <div class="t-progress">
    <t-line-bar
      :percentage="percentage"
      :statusColor="statusColor"
      :height="height"
      :statusTipType="statusTipType"
    ></t-line-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { EProgressType, IProgressProps } from "./types";
import TLineBar from "./components/TLineBar.vue";

export default defineComponent({
  name: "t-progress",
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
        if (value > 0 && value < 100) return true;
        console.warn("[Progress Component warning]: value out of range");
      },
    },

    height: Number,

    status: {
      type: String,
      default: "normal",
    },
  },

  setup(props: IProgressProps) {
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
      value: 0,
      statusColor: statusType[props.status] || "#409eff",
      statusTipType: statusTip[props.status] || "",
    });

    console.log(state.statusColor);

    state.value =
      props.percentage > 100
        ? 100
        : props.percentage < 0
        ? 0
        : props.percentage;

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style scoped lang="scss">
</style>