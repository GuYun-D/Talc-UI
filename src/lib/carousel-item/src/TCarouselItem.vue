<template>
  <div class="t-carousel-item">
    <transition :name="animationName">
      <div v-if="selfIndex === currentIndex">
        <img :src="imgUrl" alt="" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  reactive,
  ref,
  toRefs,
  watch,
} from "vue";
import { emitter } from "../../utils";
import { dir, director } from "../type";

export default defineComponent({
  name: "t-carousel-item",
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
  },
  setup() {
    const instance = getCurrentInstance();
    let animationName = ref("taRi");

    const state = reactive({
      selfIndex: instance.vnode.key,
      // @ts-ignore
      currentIndex: instance.parent.ctx.currentIndex,
    });

    watch(
      () => {
        // @ts-ignore
        return instance.parent.ctx.currentIndex;
      },
      (value, oldVal) => {
        state.currentIndex = value;
        animationName.value = value > oldVal ? dir.taRi : dir.taLf;
      }
    );

    emitter.on("change:name", (dir: string) => {
      animationName.value = dir === director.prev ? "taLf" : "taRi";
    });

    return {
      ...toRefs(state),
      animationName,
    };
  },
});
</script>

<style scoped lang="scss">
.t-carousel-item {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  .taRi-enter-active,
  .taRi-leave-active {
    transition: all 300ms linear;
  }

  .taRi-enter-active {
    transform: translateX(100%);
  }

  .taRi-enter-to {
    transform: translateX(0);
  }

  .taRi-leave-active {
    transform: translateX(0);
  }

  .taRi-leave-to {
    transform: translateX(-100%);
  }

  .taLf-enter-active,
  .taLf-leave-active {
    transition: all 300ms linear;
  }

  .taLf-enter-active {
    transform: translateX(-100%);
  }

  .taLf-enter-to {
    transform: translateX(0);
  }

  .taLf-leave-active {
    transform: translateX(0);
  }

  .taLf-leave-to {
    transform: translateX(100%);
  }

  img {
    width: 100%;
    height: 100%;
  }
}
</style>