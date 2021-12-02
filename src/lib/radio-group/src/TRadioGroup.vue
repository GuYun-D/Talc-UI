<template>
  <div
    class="t-radio-group"
    :class="{
      't-radio-vertical': vertical,
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import TRadio from "../../radio";
import { AllType } from "../../radio/src/type";

export default defineComponent({
  name: "t-radio-group",
  emits: ["update:modelValue", "change"],
  props: {
    modelValue: AllType,
    vertical: {
      type: Boolean,
      default: false,
    },
    radioType: {
      type: String,
      default: "normal",
    },
  },
  setup(props, { slots, emit }) {
    if (!slots.default) {
      console.error(
        "[RadioGroup Component Error]: Please ensure that the t-radio-group component is passed in the slot"
      );
      return;
    }

    let defaults = slots.default();

    if (
      defaults[0].type.toString() === "Symbol(Fragment)" &&
      defaults.length === 1
    ) {
      // @ts-ignore
      defaults = defaults[0].children;
    }

    defaults.forEach((tag) => {
      if (tag.type !== TRadio) {
        throw new Error(
          "[RadioGroup Component Error]: The subcomponent of a t-radio-group must be a t-radio component"
        );
      }
    });

    const state = reactive({
      currentKey: "",
      currentValue: "",
      firstRadioKey: -1,
      lastRadioKey: -1,
    });

    const setCurrrentValue = (
      value: any = undefined,
      radioKey: any = undefined
    ) => {
      if (value && radioKey !== undefined) {
        state.currentKey = radioKey;
        state.currentValue = value;
        emit("update:modelValue", value);
        emit("change", value);
      }
    };

    if (props.vertical && props.radioType === "button") {
      throw new Error(
        "[RadioGroup Component Error]: Vertical property cannot exist with radiotype='button'"
      );
      return;
    }

    state.firstRadioKey = defaults[0].key as number;
    state.lastRadioKey = defaults[defaults.length - 1].key as number;

    setCurrrentValue();

    return { setCurrrentValue, ...toRefs(state) };
  },
});
</script>

<style scoped lang="scss">
.t-radio-group {
  &.t-radio-vertical {
    display: flex;
    flex-direction: column;
  }
}
</style>