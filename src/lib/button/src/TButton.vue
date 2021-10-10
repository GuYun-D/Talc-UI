<template>
  <button class="t-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="t-loadingIndicator"></span>
    <t-icon v-if="icon" class="icon" :icon="icon"></t-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>

<script>
import { computed, defineComponent } from "vue";
import { TBProps } from "./button";
import TIcon from "../../iconfont/src/TIcon.vue";

export default defineComponent({
  name: "Button",
  props: TBProps,
  components: {
    TIcon,
  },
  setup(props) {
    const { theme, size, level, ripple, icon, iconPosition } = props;
    const classes = computed(() => {
      return {
        [`t-theme-${theme}`]: theme,
        [`t-size-${size}`]: size,
        [`t-level-${level}`]: level,
        [`t-ripple`]: ripple,
        [`icon-${iconPosition}`]: true,
      };
    });

    return { classes, icon };
  },
});
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
.t-button {
  position: relative;
  box-sizing: border-box;
  height: $h;
  padding: 0 12px !important;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: all 250ms;
  vertical-align: middle;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  > .content {
    order: 2;
  }
  > .icon {
    margin-right: 0.3em;
    margin-left: 0;
    order: 1;
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }

    > .content {
      order: 1;
    }
  }
  &.t-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.t-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  &.t-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.t-size-small {
    font-size: 12px;
    height: 28px;
    padding: 0 4px;
  }

  &.t-theme-button {
    &.t-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.t-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.t-theme-link {
    &.t-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.t-theme-text {
    &.t-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.t-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }

  &.t-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.t-theme-link,
  &.t-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }

  > .t-loadingIndicator {
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: t-spin 1s infinite linear;
  }

  span.ripple {
    position: absolute;
    /* 根据按钮定位 */
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: rgba(241, 0, 0, 0.7);
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 1;
    }
  }

  @keyframes t-spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
