<template>
  <div>
    <!-- 
      默认会将绑定的属性都绑定到根元素
      Button ：
        <div  @mouseover="onClick" @focus="onClick"  @click="onClick">
          <button></button>
        </div>
     -->
    <Button @mouseover="onClick" @focus="onClick"  @click="onClick">你好</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },

  setup() {
    const onClick = () => {
      console.log("执行了");
    };

    return {onClick}
  },
};
</script>

<style lang="scss" scoped>
</style>