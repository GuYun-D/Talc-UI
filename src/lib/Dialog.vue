<template>
  <div>
    <template v-if="visible">
      <Teleport to="body">
        <!-- 遮罩层 -->
        <div class="t-dialog-overlay" @click="onClickOverlay"></div>
        <div class="t-dialog-wrapper">
          <div class="t-dialog">
            <header>
              <slot name="title" />
              <span @click="close" class="t-dialog-close"></span>
            </header>
            <main>
              <slot name="content" />
            </main>
            <footer>
              <t-button @click="confirm" level="main">OK</t-button>
              <t-button @click="cancel">Cancel</t-button>
            </footer>
          </div>
        </div>
      </Teleport>
    </template>
  </div>
</template>

<script lang="ts">
import TButton from "./button/src/TButton.vue";

export default {
  name: "Dialog",
  components: {
    TButton,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },

    // 是否点击遮罩层关闭dialog
    closeOnClickOverlay: {
      type: Boolean,
      default: false,
    },

    // 用户传过来的确认函数
    confirm: {
      type: Function,
    },

    // 用户传过来的取消函数
    cancel: {
      type: Function,
    },
  },

  setup(props, context) {
    const close = () => {
      context.emit("update:visible", !props.visible);
    };

    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };

    const confirm = () => {
      if (props.confirm && props.confirm() !== false) {
        close();
      }
    };

    const cancel = () => {
      // context.emit('cancel')
      props.cancel && props.cancel();
      close();
    };
    return { close, onClickOverlay, confirm, cancel };
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.t-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  width: 80%;
  min-width: 20em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
