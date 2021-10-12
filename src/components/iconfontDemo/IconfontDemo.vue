<template>
  <div>
    <h1>icon组件</h1>
    <div class="desc">
      Talc UI
      提供了部分常见的字体图标。组件库提供了两者字体图标的使用方式，一种是svg方式，一种是添加类名的方式。我并没有将这两种方式对应的js和css文件引入到全局的css，所以当你需要使用组件库提供的字体图标时，你需要导入对应的文件。
      svg形式的需要导入一个iconfont.js的文件，类名的方式你需要导入一个font.css文件，且使用类名的方式，你还需要使用talc这个总的前缀
    </div>
    <Demo :component="IConfont2Demo"></Demo>

    <Demo :component="IConfont1Demo">
      <div>
        <p>组件库也提供了相应的icon组件，可以快速方便的使用图标</p>
      </div>
    </Demo>

    <p class="acction">
      如果你要修改svg方式的icon的颜色，应当使用css的fill属性，否则无法对icon颜色进行修改
    </p>
    <pre>
    .t-icon{
      fill: red;
    }
    </pre>

    <Attribute :attributeConfig="attributeConfig"></Attribute>

    <icon-list></icon-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Demo from "../Demo.vue";
import IConfont2Demo from "../iconfontDemo/demo/Iconfont2.demo.vue";
import IConfont1Demo from "../iconfontDemo/demo/Iconfont1.demo.vue";
import Attribute from "../../base-ui/attribute/index";
import { attributeConfig } from "./config/attribute.config";
import IconList from "./component/IconList.vue";

export default defineComponent({
  components: {
    Demo,
    Attribute,
    IconList,
  },
  setup() {
    return {
      IConfont1Demo,
      IConfont2Demo,
      attributeConfig,
    };
  },
});
</script>

<style lang="scss" scoped>
.desc {
  text-indent: 2em;
  margin-bottom: 10px;
}

.acction {
  color: rgb(30, 158, 179);
  margin-bottom: 20px;
}

pre {
  background-color: #eaecec;
  padding-top: 10px;
  font-size: 20px;
}
</style>
