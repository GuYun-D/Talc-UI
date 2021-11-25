<template>
  <div class="t-card" :style="{ width: cardWidth + 'px' }" :class="cardClasses">
    <div v-if="!commodityCard" :class="{ tSimpleCard: commodityCard }">
      <div class="t-card-header" ref="cardHeaderRef">
        <slot name="header"></slot>
      </div>
      <slot></slot>
    </div>

    <div v-else class="commodity-card">
      <a :href="imgLink" target="_blank">
        <img :src="imgSrc" alt="" :style="{ height: imgHeight + 'px' }" />
      </a>
      <div class="card-explain">
        <div class="commodity-card-title">
          {{ cardTitle }}
        </div>
        <div>
          <slot name="commodityCard"></slot>
        </div>
      </div>
    </div>

    <div ref="cardFooterRef">
      <slot name="cardFooter"></slot>
    </div>
  </div>
</template>


<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { cardPropsType, showShadowEumn } from "./type";

export default defineComponent({
  name: "t-card",
  props: {
    cardWidth: {
      type: Number,
    },
    showShadow: {
      type: String,
      default: "show",
      validator: (value: string) => {
        if (showShadowEumn[value]) return true;
        console.warn(
          "[Card Component Warn]: The shadow configuration of the card is a string and only supports three attribute values: show, hover and none"
        );
      },
    },
    commodityCard: {
      type: Boolean,
      default: false,
    },
    imgHeight: {
      type: Number,
      default: 200,
    },
    imgLink: {
      type: String,
      default: "javascript:;",
    },
    imgSrc: {
      type: String,
    },
    cardTitle: String,
  },
  setup(props: cardPropsType) {
    const cardHeaderRef = ref<HTMLDivElement>();
    const cardFooterRef = ref<HTMLDivElement>();
    onMounted(() => {
      if (cardHeaderRef.value && cardHeaderRef.value.innerHTML === "") {
        cardHeaderRef.value.style.display = "none";
      }

      if (cardFooterRef.value && cardFooterRef.value.innerHTML !== "") {
        cardFooterRef.value.style.borderTop = "1px solid #e4e7ed";
      }
    });

    const cardClasses = computed(() => {
      return {
        [`t-card-${props.showShadow}`]: props.showShadow !== "none",
      };
    });

    if (
      props.commodityCard === false &&
      (props.imgLink !== "javascript:;" ||
        props.imgSrc ||
        props.imgHeight !== 200 ||
        props.cardTitle)
    ) {
      console.warn(
        "[Card Component Warn]: The current card is not a commodity card. Please do not set imglink, imgsrc, imgheight"
      );
    }
    return { cardHeaderRef, cardClasses, cardFooterRef };
  },
});
</script>

<style scoped lang="scss">
.t-card {
  width: 100%;
  min-width: 200px;
  height: auto;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #e4e7ed;
  transition: all 300ms;

  &.t-card-hover:hover {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  }

  &.t-card-show {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  }

  .tSimpleCard {
    display: none;
    .t-card-header {
      border: none;
    }
  }

  .t-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    margin-bottom: 10px;
    border-bottom: 1px solid #e4e7ed;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: clip;
    padding: 10px;
  }

  .commodity-card {
    .card-explain {
      padding: 10px;

      .commodity-card-title {
        font-size: 18px;
        color: #111;
        padding: 10px 0;
      }
    }
  }
}
</style>