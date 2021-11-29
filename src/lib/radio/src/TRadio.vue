<template>
  <div class="t-radio" v-radio="modelValue">
    <label>
      <span
        :class="{ 't-radio-instructions-disabled': disabled }"
        @click="setRaio"
        class="t-radio-instructions"
      ></span>
      <span @click="setRaio" :class="{ 't-radio-text-disabled': disabled }">
        <slot></slot>
      </span>
      <input class="t-radio-inp" type="radio" :disabled="disabled" />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IRadioProps } from "./type";
import { radio } from "./directives";

export default defineComponent({
  name: "t-radio",
  emits: ["update:modelValue"],
  props: {
    modelValue: Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  directives: {
    radio,
  },
  setup(props: IRadioProps, { emit }) {
    const setRaio = () => {
      if (props.disabled) return;
      emit("update:modelValue", !props.modelValue);
    };
    return { setRaio };
  },
});
</script>

<style scoped lang="scss">
.t-radio {
  margin: 5px;

  label {
    display: flex;
    align-items: center;

    .t-radio-instructions {
      position: relative;
      display: inline-block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 1px solid #dcdfe6;
      margin: 0 5px;
      transition: background-color 0.3s;

      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 40%;
        height: 40%;
        top: 50%;
        left: 50%;
        border-radius: inherit;
        transform: translateX(-50%) translateY(-51%);
        background-color: rgb(255, 255, 255);
      }

      &.t-radio-instructions-disabled {
        background-color: #e7e7e7;
      }
    }

    .t-radio-text-disabled {
      color: #c0c4cc;
    }

    .t-radio-inp {
      opacity: 0;
    }
  }
}
</style>