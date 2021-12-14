<template>
  <div>
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="desc" ref="descRef" v-if="isShowDesc">
      <slot></slot>
    </div>
    <div class="demo">
      <div class="demo-component">
        <component :is="component"></component>
      </div>

      <div class="demo-actions" @click="codeVisible = !codeVisible">
        {{ codeVisible ? "隐藏代码&lt;/&gt;" : "查看代码&lt;/&gt;" }} 
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
import { computed, ref, onMounted } from "vue";

export default {
  props: {
    component: Object,
  },
  setup(props) {
    const descRef = ref(null);
    const isShowDesc = ref(true);
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    const codeVisible = ref(false);

    onMounted(() => {
      if (descRef.value.innerText.length === 0) {
        isShowDesc.value = false;
      }
    });

    return {
      Prism,
      html,
      codeVisible,
      descRef,
      isShowDesc,
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

.desc {
  padding: 10px 20px;
  font-size: 15px;
  color: rgb(99, 97, 97);
  font-size: 14px;
  line-height: 2;
  margin: 20px 18px;
  margin-left: 0;
  box-sizing: border-box;
}
.demo {
  border: 1px solid rgb(235, 235, 235);
  margin: 16px 0 32px;
  border-radius: 10px;

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
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    user-select: none;
    &:hover {
      box-shadow: 0px 2px 2px #ccc;
      color: #000000;
    }
  }
  &-code {
    border-top: 1px dashed $border-color;
    transition: all 1s;
    overflow: auto;
    background-color: #1b1b1b;
    border-radius: 5px;

    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 10px;
    }
  }
}

.token.tag,
.token.property {
  color: #ff4483 !important;
}
.token.attr-name {
  color: #2691cf;
}

.token.attr-value {
  color: #59f874;
}

.token.keyword {
  color: #2180d8;
}

.token.string {
  color: #22d3bb;
}

.token.function {
  color: #c59a23;
}

.token.number {
  color: #5a22c4;
}

.token .language-javascript {
  color: #2cac37;
}

.token.operator {
  color: rgb(238, 224, 224) !important;
  background-color: transparent !important;
}

.token.selector{
  color: rgb(255, 131, 42);
}

.token,
.string,
.url {
  background-color: transparent !important;
}

pre {
  font-size: 15px;
  line-height: 1.2 !important;
  padding: 20px;
  color: rgb(198, 198, 198);
}
</style>
