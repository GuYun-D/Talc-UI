<template>
  <div
    class="t-tag"
    :style="{
      color: tagColor,
      backgroundColor: tagBgcolor,
    }"
    v-if="tagVisiable"
  >
    <slot></slot>
    <span class="talc ta-delete clear-btn" @click="closeTag"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { ITagProps, ETagType } from "./types";
import { useTagType } from "../../hooks";

export default defineComponent({
  name: "t-tag",
  emits: ["beforeTagClose"],
  props: {
    type: {
      type: String,
      default: "normal",
      validator: (value: string) => {
        if (ETagType[value]) return true;
        console.warn(
          "[Tag Component Warn]: The types of tag tags are normal, danger, info, success and warning"
        );
      },
    },

    tagColor: String,
    tagBgcolor: String,
    closeable: {
      type: Boolean,
      default: false,
    },
  },
  setup(props: ITagProps, { emit }) {
    const state = reactive({
      tagColor: "",
      tagBgcolor: "",
      tagVisiable: true,
      isImplement: false,
    });

    const [color, bgc] = useTagType(props.type);

    /**
     * 用户可以自定义配置tag的颜色
     */
    state.tagColor = props.tagColor ? props.tagColor : color;
    state.tagBgcolor = props.tagBgcolor ? props.tagBgcolor : bgc;

    /**
     * 点击删除，删除tag
     */
    const closeTag = () => {
      emit("beforeTagClose", _close);
      if (state.isImplement) return;
      state.tagVisiable = false;
    };

    /**
     * 清除标签,将该函数通过emit事件传递给用户，只有当传入的flag为true时才会关闭
     * 定义一个flag，监控_close函数是否执行，如果执行，那么tag的关闭完全交给其参数决定
     * 如果是false说明没有执行关闭检查，直接关闭
     */
    function _close(flag: boolean) {
      state.isImplement = true;
      if (flag) state.tagVisiable = false;
      else return;
    }

    return { ...toRefs(state), closeTag };
  },
});
</script>

<style scoped lang="scss">
.t-tag {
  border: 1px solid;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 8px;
  background-color: #f40;
  border-radius: 4px;
  transition: all 300ms;

  .clear-btn {
    cursor: pointer;
    margin-left: 4px;

    &:hover {
      background-color: #fff;
      border-radius: 50%;
    }
  }
}
</style>