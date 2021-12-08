<template>
  <div
    class="t-tag"
    :style="{
      color: tagColor,
      backgroundColor: tagBgcolor,
    }"
  >
    123
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { ITagProps, ETagType } from "./types";
import { useTagType } from "../../hooks";

export default defineComponent({
  name: "t-tag",
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
  },
  setup(props: ITagProps) {
    const state = reactive({
      tagColor: "",
      tagBgcolor: "",
    });

    const [color, bgc] = useTagType(props.type);

    /**
     * 用户可以自定义配置tag的颜色
     */
    state.tagColor = props.tagColor ? props.tagColor : color;
    state.tagBgcolor = props.tagBgcolor ? props.tagBgcolor : bgc;

    return { ...toRefs(state) };
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
}
</style>