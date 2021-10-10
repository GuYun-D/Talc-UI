<template>
  <div>
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo">
      <div class="demo-component">
        <component :is="component"></component>
      </div>

      <div class="desc">
        <slot></slot>
      </div>

      <div class="demo-actions" @click="codeVisible = !codeVisible">
        {{ codeVisible ? "隐藏代码" : "查看代码" }}
      </div>
      <div class="demo-code" v-if="codeVisible">
        <pre v-html="html" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import "prismjs";
import "prismjs/themes/prism.css";
const Prism = (window as any).Prism;
import { computed, ref } from "vue";

export default {
  props: {
    component: Object,
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    const codeVisible = ref(false);

    return {
      Prism,
      html,
      codeVisible,
    };
  },
};
</script>

<style lang="scss">
$border-color: #d9d9d9;
h2 {
  font-size: 20px;
  padding: 8px 16px;
  color: #1f2f3d;
  font-weight: 100;
}
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  .desc {
    padding: 10px 20px;
    font-size: 15px;
    color: rgb(99, 97, 97);
  }

  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    text-align: center;
    cursor: pointer;
    color: #d5d4d4;
    transition: all 0.3s;
    &:hover {
      box-shadow: 2px 2px 2px #ccc;
      color: #26e144;
    }
  }
  &-code {
    border-top: 1px dashed $border-color;
    transition: all 1s;
    overflow: auto;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 10px;
    }
  }
}

.token.tag {
  color: #4181be !important;
}

.token.attr-name {
  color: #88c6ea;
}

.token.attr-value {
  color: #26e144;
}

.token.keyword {
  color: #e91e63;
}

.token.string {
  color: #10e1c5;
}

.token.function {
  color: #f5b607;
}

.token.number {
  color: #7f3cfa;
}

.token .language-javascript {
  color: #06ee19;
}

pre {
  font-size: 15px;
  line-height: 1.2 !important;
}
</style>
