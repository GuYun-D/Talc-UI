<template>
  <div class="t-card" :style="{ width: cardWidth + 'px' }" :class="cardClasses">
    <div class="t-card-header" ref="CardHeaderRef">
      <slot name="header"></slot>
    </div>
    <slot></slot>
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
          "Card Component Warn: The shadow configuration of the card is a string and only supports three attribute values: show, hover and none"
        );
      },
    },
  },
  setup(props: cardPropsType) {
    const CardHeaderRef = ref<HTMLElement>();
    onMounted(() => {
      if (CardHeaderRef.value.innerHTML === "") {
        CardHeaderRef.value.style.display = "none";
      }
    });

    const cardClasses = computed(() => {
      return {
        [`t-card-${props.showShadow}`]: props.showShadow !== "none",
      };
    });
    return { CardHeaderRef, cardClasses };
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
}
</style>