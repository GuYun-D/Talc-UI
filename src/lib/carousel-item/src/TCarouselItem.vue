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
    let direction = ref(true);
    /**
     * 本组件中因为编辑器报错：instance上不存在ctx属性，
     * 但是在浏览器的显示正常，故而我使用了@ts-ignore忽略这项错误
     */
    // @ts-ignore
    const switchType = instance.ctx.$parent.switchType;

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

        if (switchType === "opacity") {
          animationName.value = "opacity";
        } else {
          if (direction.value) {
            animationName.value = value > oldVal ? dir.taBo : dir.taTo;
          } else {
            animationName.value = value > oldVal ? dir.taRi : dir.taLf;
          }
        }
      }
    );

    emitter.on("change:name", (dir: string) => {
      animationName.value = dir === director.prev ? "taLf" : "taRi";
    });

    emitter.on("change:direction", (value: string) => {
      if (value === "vertical") {
        animationName.value = "taTo";
        direction.value = false;
      }
    });

    if (switchType === "opacity") {
      animationName.value = "opacity";
    }

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

  img {
    width: 100%;
    height: 100%;
  }

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

  // 着呢
  .taTo-enter-active,
  .taTo-leave-active {
    transition: all 300ms linear;
  }

  .taTo-enter-active {
    transform: translateY(-100%);
  }

  .taTo-enter-to {
    transform: translateY(0);
  }

  .taTo-leave-active {
    transform: translateY(0);
  }

  .taTo-leave-to {
    transform: translateY(100%);
  }

  .taBo-enter-active,
  .taBo-leave-active {
    transition: all 300ms linear;
  }

  .taBo-enter-active {
    transform: translateY(100%);
  }

  .taBo-enter-to {
    transform: translateY(0);
  }

  .taBo-leave-active {
    transform: translateY(0);
  }

  .taBo-leave-to {
    transform: translateY(-100%);
  }

  // 透明度切换
  .opacity-enter-from,
  .opacity-leave-to {
    opacity: 0;
  }

  .opacity-enter-active,
  .opacity-leave-active {
    transition: opacity 700ms ease;
  }

  .opacity-enter-to,
  .opacity-leave-from {
    opacity: 1;
  }
}
</style>