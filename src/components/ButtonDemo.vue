<template>
  <div>
    <h3>案例一</h3>
    <Button>默认按钮</Button>
    <Button theme="button">就是按钮</Button>
    <Button theme="link">链接形式</Button>
    <Button theme="text">文本形式</Button>

    <h3>案例二</h3>
    <Button>normal</Button>
    <Button size="big">big</Button>
    <Button size="small">small</Button>

    <h3>案例三</h3>
    <div>
      <Button size="big" level="main">主要按钮</Button>
      <Button size="normal">普通按钮</Button>
      <Button size="small" level="danger">危险按钮</Button>
    </div>
    <div>
      <Button size="big" theme="link" level="main">主要按钮</Button>
      <Button size="normal" theme="link">普通按钮</Button>
      <Button size="small" theme="link" level="danger">危险按钮</Button>
    </div>
     <div>
      <Button size="big" theme="text" level="main">主要按钮</Button>
      <Button size="normal" theme="text">普通按钮</Button>
      <Button size="small" theme="text" level="danger">危险按钮</Button>
    </div>
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

    return { onClick };
  },
};
</script>

<style lang="scss" scoped>
h3 {
  color: #42b983;
  margin: 20px 0;
}
</style>