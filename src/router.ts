import { createWebHashHistory, createRouter } from "vue-router";
import Switch from "./components/switchDemo/SwitchDemo.vue";
import Button from "./components/buttonDemo/ButtonDemo.vue";
import Dialog from "./components/DialogDemo.vue";
import Tabs from "./components/demoUI/Tabs/Tabs1.demo.vue";
import Icon from "./components/iconfontDemo/IconfontDemo.vue";
import Input from "./components/inputDemo/InputDemo.vue";
import Grid from "./components/gridDemo/gridDemo.vue";
import Content from "./components/contentDemo/ContentDemo.vue";
import Toast from "./components/toastDemo/ToastDemo.vue"
import Home from "./views/Home.vue";
import Doc from "./views/DocPage/Doc.vue";
import Popover from './components/popoverDeme/PopoverDemo.vue'
import Collapse from './components/collapseDemo/CollapseDemo.vue'

import introduce from "../src/markdown/introduce.md";
import install from "../src/markdown/install.md";
import getStarted from "../src/markdown/GetStarted.md";
import Cascader from "../src/components/cascaderDemo/CascaderDemo.vue"
import Carousel from '../src/components/carouselDemo/carouseDemo.vue'
import Magnifier from "../src/components/magnifierDemo/MagnifierDemo.vue"
import Rate from "../src/components/rateDemo/RateDemo.vue"
import Card from "../src/components/cardDemo/cardDemo.vue"
import Select from '../src/components/selectDemo/SelectDemo.vue'
import Radio from '../src/components/radioDemo/RadioDemo.vue'
import InputNumber from "../src/components/inputNumberDemo/InputNumberDemo.vue"
import Tag from "../src/components/tagDemo/TagDemo.vue"
import Progress from "../src/components/progressDemo/ProgressDemo.vue"
import Transfer from "../src/components/transferDemo/TransferDemo.vue"

const mdPath = (string) => h(Markdown, { content: string, key: string });

import { h } from "vue";
import Markdown from "./components/markdown.vue";

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/doc",
      component: Doc,
      children: [
        {
          path: "",
          redirect: "/doc/introduce",
        },
        {
          path: "introduce",
          component: mdPath(introduce),
        },
        {
          path: "get-start",
          component: mdPath(getStarted),
        },
        {
          path: "install",
          component: mdPath(install),
        },
        {
          path: "switch",
          component: Switch,
        },
        {
          path: "button",
          component: Button,
        },
        {
          path: "dialog",
          component: Dialog,
        },
        {
          path: "tabs",
          component: Tabs,
        },
        {
          path: "icon",
          component: Icon,
        },
        {
          path: "input",
          component: Input,
        }, {
          path: 'grid',
          component: Grid
        }, {
          path: 'layout',
          component: Content
        }, {
          path: 'toast',
          component: Toast
        }, {
          path: 'popover',
          component: Popover
        }, {
          path: 'collapse',
          component: Collapse
        }, {
          path: 'cascader',
          component: Cascader
        }, {
          path: 'carousel',
          component: Carousel
        }, {
          path: 'magnifier',
          component: Magnifier
        }, {
          path: 'rate',
          component: Rate
        }, {
          path: 'card',
          component: Card
        }, {
          path: 'select',
          component: Select
        }, {
          path: 'radio',
          component: Radio
        }, {
          path: 'input-number',
          component: InputNumber
        }, {
          path: "tag",
          component: Tag
        }, {
          path: 'progress',
          component: Progress
        }, {
          path: "transfer",
          component: Transfer
        }
      ],
    },
    {
      path: '/test',
      component: () => import('./testComponents/Test.vue')
    }
  ],
});
