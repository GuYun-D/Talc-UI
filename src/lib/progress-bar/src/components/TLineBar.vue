<template>
  <div class="t-line-bar-wrapper">
    <div
      class="t-line-bar"
      :style="{
        height: realHeight + 'px',
        borderRadius: realHeight + 'px',
        lineHeight: realHeight + 'px',
      }"
    >
      <div
        class="bar"
        :style="{
          width: percentage + '%',
          backgroundColor: statusColor,
        }"
      >
        <div v-if="textInside && percentage > 0">{{ percentage }}%</div>
        <div v-if="loading" class="t-progress-loading"></div>
      </div>
    </div>
    <div class="t-progress-tip">
      <span
        v-if="statusTipType"
        class="talc"
        :class="statusTipType"
        :style="{
          color: statusColor,
        }"
      ></span>
      <span v-else> {{ percentage }}% </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { ILineBarProps } from "../types";

export default defineComponent({
  props: {
    percentage: Number,
    statusColor: String,
    height: Number,
    statusTipType: String,
    textInside: Boolean,
    loading: Boolean
  },
  setup(props: ILineBarProps) {
    const state = reactive({
      realHeight: props.textInside ? 30 : props.height,
    });

    if(props.loading){

    }

    return { ...toRefs(state) };
  },
});
</script>

<style scoped lang="scss">
.t-line-bar-wrapper {
  display: flex;
  align-items: center;
  color: rgb(117, 117, 117);

  .t-line-bar {
    position: relative;
    width: 350px;
    height: 10px;
    border-radius: 10px;
    background-color: rgb(230, 239, 243);
    overflow: hidden;
    margin-right: 5px;

    .bar {
      position: absolute;
      height: 100%;
      left: 0;
      color: #fff;
      text-align: right;
      transition: all 300ms;
      border-radius: 1000px;

      .t-progress-loading {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background-color: rgba(256, 256, 256, .2);
        background: linear-gradient(
          to right,
          rgba(256, 256, 256)
          rgba(256, 256, 256, .2),
          rgba(256, 256, 256, .1),
        );
        animation: loading 1s linear infinite;
      }

      @keyframes loading {
        0% {
          width: 0%;
        }
        100% {
          width: 100%;
        }
      }

      div {
        padding-right: 10px;
      }
    }
  }
}
</style>
