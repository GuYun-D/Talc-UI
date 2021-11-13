<template>
  <div>
    <t-magnifier
      link="link"
      :imgWidth="imgWidth"
      :imgHeight="imgHeight"
      :blank="blank"
      :img-url="imgUrl"
      :magWidth="magWidth"
      :magHeight="magHeight"
      :imgAlt="imgAlt"
    ></t-magnifier>

  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      imgUrl: "/magnifier/universe.jpg",
      blank: true,
      link: "http://www.baidu.com",
      imgWidth: 656,
      imgHeight: 369,
      magWidth: 100,
      magHeight: 100,
      imgAlt: "风景",
    });

    return {
      ...toRefs(state),
    };

  },
});
</script>

<style scoped>
</style>