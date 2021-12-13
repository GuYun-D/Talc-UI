<template>
  <div class="page">
    <div>
      <Topnav :colorStyle="'home'"></Topnav>
      <div class="container">
        <div class="banner">
          <h1>Talc UI</h1>
          <h2>一个基于vue3的UI库</h2>
          <p class="actions">
            <a href="https://github.com/GuYun-D/Talc-UI">Github</a>
            <router-link to="/doc">开始使用</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    Topnav,
  },

  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
$mainColor: #4fc08d;
$fontColor: #fff;

@font-face {
  font-family: my;
  src: url("../assets/DasarNegara-PKAlg.otf");
}

.page {
  background: url("../assets/jhk-1633087632377.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    .banner {
      > h1 {
        font-size: 150px;
        font-weight: bold;
        font-family: my;
        color: $fontColor;
        display: block;
        text-shadow: none;
        border: none;
      }

      > h2 {
        color: $fontColor;
        border-bottom: none;
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
}
</style>
