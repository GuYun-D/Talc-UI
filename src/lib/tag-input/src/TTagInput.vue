<template>
  <div
    ref="addBtnRef"
    class="t-tag-input"
    :class="isFocus ? 't-tag-border' : 't-tag-none'"
    @click="addNewTag"
  >
    <span v-show="currentType === 'span'">+ new tag</span>
    <input
      ref="newInputRef"
      v-show="currentType === 'input'"
      type="text"
      class="t-tag-new-input"
      @blur="tagInputBlur"
      @keyup.enter="tagInputBlur"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, nextTick, watch } from "vue";

export default defineComponent({
  name: "t-tag-input",
  setup(props, { emit }) {
    const newInputRef = ref<HTMLInputElement>();
    const addBtnRef = ref<HTMLDivElement>();

    const state = reactive({
      currentType: "span",
      isFocus: false,
      isAdd: true,
    });

    /**
     * 点击添加按钮
     */
    const addNewTag = async () => {
      if (state.isFocus) return;
      state.currentType = "input";
      state.isFocus = true;
      await nextTick();
      newInputRef.value.focus();
    };

    /**
     * 输入框失去焦点
     */
    const tagInputBlur = () => {
      state.isFocus = false;
      state.currentType = "span";
      if (newInputRef.value.value) {
        emit("addTag", newInputRef.value.value);
      }

      newInputRef.value.value = "";
    };

    return {
      ...toRefs(state),
      addNewTag,
      newInputRef,
      tagInputBlur,
    };
  },
});
</script>

<style scoped lang="scss">
.t-tag-input {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 102px;
  border: 1px solid rgb(136, 136, 136);
  border-radius: 4px;
  color: rgb(136, 136, 136);
  transition: all 300ms;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    color: rgb(33, 119, 184);
    background-color: rgb(227, 243, 255);
  }

  &.t-tag-border {
    border-color: rgb(33, 119, 184);
  }

  &.t-tag-none {
    border-color: rgb(136, 136, 136);
  }

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 8px;
  }

  .t-tag-new-input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding: 8px;

    &:active {
      border: none;
    }

    &:focus {
      border: none;
    }
  }
}
</style>