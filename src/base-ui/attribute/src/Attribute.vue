<template>
  <footer>
    <div class="itemAttribute">
      <div class="title">{{ attributeTitle }}</div>
      <div class="itemHeader">
        <span>Attribute</span>
        <span>Description</span>
        <span>Type</span>
        <span>Accepted Values</span>
        <span>Default / isRequired</span>
      </div>
      <div
        class="itemMain"
        v-for="attributeItem in attributeItems"
        :key="attributeItem.name"
      >
        <span>{{ attributeItem.name }}</span>
        <span>{{ attributeItem.desc }}</span>
        <span>{{ attributeItem.type }}</span>
        <span>{{ attributeItem.value }}</span>
        <span>{{ attributeItem.defaultValue }}</span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import type { IAttributeConfig } from "../types/types";

export default defineComponent({
  props: {
    attributeConfig: {
      type: Object as PropType<IAttributeConfig>,
      required: true,
    },
  },
  setup(props) {
    const { attributeTitle, attributeItems } = props.attributeConfig;
    return { attributeTitle, attributeItems };
  },
});
</script>

<style scoped lang="scss">
footer {
  width: 100%;
  padding: 20px;
  overflow: auto;
  .itemAttribute {
    width: 100%;
    .title {
      font-size: 30px;
    }

    .itemHeader {
      width: 100%;
      min-width: 796px;
      font-weight: bold;
      height: 20px;
      padding: 20px 20px 25px 20px;
      border-bottom: 2px solid #42b983;
      border-top: 1px solid rgb(238, 238, 238);

      span {
        display: inline-block;
        width: 20%;
        min-width: 151px;
        color: #42b983;
      }
    }

    .itemMain {
      min-width: 796px;
      width: 100%;
      height: 20px;
      padding: 20px;
      line-height: 5px;
      border-bottom: 1px dotted rgb(95, 86, 86);

      span {
        display: inline-block;
        width: 20%;
        min-width: 151px;
        color: rgb(63, 62, 62);
      }
    }
  }
}
</style>
