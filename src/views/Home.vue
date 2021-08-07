<template>
  <div class="page">
    <div>
      <Topnav></Topnav>
      <div class="container">
        <div class="banner">
          <h1>Talc UI</h1>
          <h2>一个基于vue3的UI框架</h2>
          <p class="actions">
            <a href="https://github.com/GuYun-D/Talc-UI">Github</a>
            <router-link to="/doc">开始使用</router-link>
          </p>
        </div>
      </div>
    </div>

    <div class="footer">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-typescript"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>TypeScript 书写(非严格检查)</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon--daimashengcheng"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都简洁易读</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
};
</script>


<style lang="scss" scoped>
$mainColor: #4fc08d;

.page {
  // background-color: rgb(26, 100, 19);
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    .banner {
      > h1 {
        font-size: 100px;
        font-weight: bold;
        color: $mainColor;
        text-shadow: rgb(120 122 121) 1px 2px 3px;
      }

      > h2 {
        color: rgb(165, 165, 165);
      }

      > .actions {
        padding: 34px 0;
        a {
          margin: 0 10px;
          color: #fff;
          display: inline-block;
          $h: 28px;
          border-radius: 5px;
          padding: 10px 25px;
          background-color: $mainColor;
          transition: all 250ms;

          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  }

  .footer {
    margin: 10px auto 0;
    width: 375px;
    @media (min-width: 800px) {
      width: 800px;
    }
    @media (min-width: 1200px) {
      width: 1200px;
    }
    > ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      > li {
        width: 300px;
        margin: 16px 0;
        display: grid;
        justify-content: center;
        align-content: space-between;
        align-items: end;
        grid-template-areas:
          "icon title"
          "icon text";
        grid-template-columns: 80px auto;
        grid-template-rows: 1fr auto;
        > svg {
          grid-area: icon;
          width: 60px;
          height: 60px;
        }
        > h3 {
          grid-area: title;
          font-size: 28px;
          @media (max-width: 500px) {
            font-size: 20px;
          }
        }
        > p {
          grid-area: text;
          @media (max-width: 500px) {
            font-size: 15px;
          }
        }

        @media (max-width: 500px) {
            justify-content: space-evenly;
          }
      }
    }
  }

  @media (max-width: 500px) {
    .container {
      flex-direction: column;
      .gulou {
        img {
          width: 70px;
        }
      }

      .banner {
        h1 {
          font-size: 68px;
        }
      }
    }
  }

  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // background: lightgreen;
}
</style>