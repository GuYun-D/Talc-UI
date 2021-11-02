<template>
  <div class="t-cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <!-- <slot></slot> -->
    </div>
    <div class="popover" v-if="popoverVisible">
      <div class="level1 wrapper">
        <div
          @click="level1Selected = item1"
          v-for="item1 in dataSource"
          :key="item1.name"
        >
          {{ item1.name }}
        </div>
      </div>
      <div class="level2 wrapper">
        <div
          @click="level2Selected = item2"
          v-for="item2 in level2Item"
          :key="item2.name"
        >
          {{ item2.name }}
        </div>
      </div>

      <div class="leve3 wrapper">
        <div v-for="item3 in level3Item" :key="item3.name">
          {{ item3.name }}
        </div>
      </div>
    </div>

    <!-- <div class="popover">
      <div v-for="item in dataSource" :key="item.name">
        <t-cascader-item :sourceItem="item"></t-cascader-item>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { ISelectedItem } from "../../types";

export default defineComponent({
  name: "t-cascader",
  props: {
    "data-source": {
      type: Array,
      required: true,
    },
  },
  setup() {
    const popoverVisible = ref(false);
    const level1Selected = ref<ISelectedItem>();
    const level2Selected = ref<ISelectedItem>();
    const level2Item = computed(() => {
      return level1Selected.value?.children;
    });

    const level3Item = computed(() => {
      return level2Selected.value?.children;
    });
    return {
      popoverVisible,
      level1Selected,
      level2Item,
      level2Selected,
      level3Item,
    };
  },
});
</script>

<style scoped lang="scss">
.t-cascader {
  .trigger {
    border: 1px solid #f40;
    width: 100px;
    height: 32px;
  }

  .popover {
    display: flex;
    border: 1px solid #f40;
    width: 100px;
    height: 200px;

    .wrapper {
      white-space: nowrap;
    }
  }
}
</style>