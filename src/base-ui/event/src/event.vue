<template>
  <footer>
    <div class="itemAttribute">
      <div class="title">{{ eventTitle }}</div>
      <div class="attr-container">
        <div class="itemHeader">
          <span>Event Name</span>
          <span>Description</span>
          <span>Param</span>
          <span>Param Type</span>
        </div>
        <div
          class="itemMain"
          v-for="eventItem in eventItems"
          :key="eventItem.eventName"
        >
          <span>{{ eventItem.eventName }}</span>
          <span>{{ eventItem.desc }}</span>
          <span>{{ eventItem.param }}</span>
          <span>{{ eventItem.paramType }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>


<script lang="ts">
import { defineComponent, PropType } from "vue";
import type { eventConfig } from "../types/types";

export default defineComponent({
  name: "Event",
  props: {
    eventConfig: {
      type: Object as PropType<eventConfig>,
      required: true,
    },
  },
  setup(props) {
    const { eventTitle, eventItems } = props.eventConfig;
    return { eventTitle, eventItems };
  },
});
</script>

<style scoped lang="scss">
$mainColor: #42b983;
$borderColor: rgb(180, 176, 176);

footer {
  width: 100%;
  padding: 20px 0;
  .itemAttribute {
    width: 100%;
    .title {
      font-size: 30px;
    }

    .attr-container {
      overflow: auto;
      .itemHeader {
        min-width: 796px;
        width: 100%;
        height: 20px;
        padding: 20px;
        line-height: 5px;
        border-bottom: 1px dotted $borderColor;
        border-bottom: 2px solid $mainColor;
        border-top: 1px solid $borderColor;

        span {
          display: inline-block;
          width: 25%;
          min-width: 151px;
          color: #474747;
        }
      }
      .itemMain {
        min-width: 796px;
        width: 100%;
        height: 20px;
        padding: 20px;
        line-height: 5px;
        border-bottom: 1px dotted $borderColor;

        &:nth-child(2n) {
          background-color: rgb(250, 252, 249);
        }

        span {
          display: inline-block;
          width: 25%;
          min-width: 151px;
          font-size: 16px;
          color: rgb(78, 78, 78);
        }
      }
    }
  }
}
</style>
