<template>
  <div class="dialog-overlay"></div>
  <div class="dialog-wrapper">
    <header>标题</header>
    <main>
      <p>第一行</p>
      <p>第二行</p>
    </main>
    <footer>
      <Button>confirm</Button>
      <Button>cancel</Button>
    </footer>
  </div>
</template>

<script lang="ts">
import Button from './Button.vue'
  export default {
    name: "Dialog"
  }
</script>

<style lang="scss">

</style>