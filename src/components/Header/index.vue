<template>
  <header class="j-header-wrapper" ref="header">
    <nav class="j-header">
      <div class="logo">
        <img src="@/assets/image/logo.png" alt="LOGO" />
      </div>
      <div class="header">
        <ul class="headerul">
          <li
            class="headerli"
            v-for="item in route"
            @click="onRoute(item.route)"
            :key="item.id"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <div
    class="bg"
    ref="bghead"
    :style="{
      height: `${bgHeight}vh`,
      background: `url(${bgimg}) center center / cover no-repeat`,
    }"
  >
    <div class="main">
      <h1>{{ bgTitle }}</h1>
      <p class="description">{{ bgTitleEN }}</p>
    </div>
    <h4 class="scroll-down" @click="onDown"></h4>
  </div>
</template>

<script>
import { defineComponent, computed, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import head from "@/utils/head";

export default defineComponent({
  props: ["height", "headine", "subhead"],
  setup(props, ctx) {
    const router = useRouter();

    // 背景图高度
    const bgHeight = computed(() => props.height || 100);
    // 正标题
    const bgTitle = computed(() => props.headine || head.getText().title);
    // 副标题
    const bgTitleEN = computed(() => props.subhead || head.getText().titleEn);

    const data = reactive({
      bgimg: head.getImg(), //背景图片
      bghead: null, //当前dom
    });

    // 跳转页面
    const methods = reactive({
      onRoute: (e) => { // 跳转页面
        router.push(e);
      },
      onDown: () => { // 页面定位到背景图下
        scrollTo(0, data.bghead.offsetHeight - 65);
      },
    });

    // 导航路由
    const route = [
      { name: "主页", route: "/", id: 0 },
      { name: "笔记", route: "Essay", id: 1 },
      { name: "关于我", route: "About", id: 2 },
    ];

    return {
      route,
      bgHeight,
      bgTitle,
      bgTitleEN,
      ...toRefs(methods),
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss">
.j-header-wrapper {
  height: 62px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10000;
}
.j-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 30px;
  backdrop-filter: saturate(180%) blur(6px);
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;

  .logo {
    img {
      width: 160px;
      height: auto;
    }
  }

  .header {
    position: relative;
  }
  .headerul {
    display: flex;
    align-items: center;
    .headerli {
      color: rgb(197, 112, 112);
      font-size: 19px;
      margin-right: 15px;
      padding-right: 10px;
    }
  }
}

.bg {
  width: 100%;
  overflow: hidden;
  position: relative;
  .main {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 100%;
    text-align: center;
    h1 {
      margin: 0 auto 1.8rem;
      font-size: 2.7rem;
      color: rgb(255, 255, 255);
      font-family: Regular, cursive;
      transition: all 0.25s ease-in-out 0.04s;
      transform: translateY(0px);
      opacity: 1;
    }
    .description {
      margin: 1.8rem auto;
      font-size: 1.7rem;
      line-height: 1.3;

      color: rgb(255, 255, 255);
      font-family: Regular, cursive;
      transition: all 0.25s ease-in-out 0.08s;
      transform: translateY(0px);
      opacity: 1;
    }
  }
  .scroll-down {
    position: absolute;
    bottom: 70px;
    width: 100%;
    text-align: center;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      display: block;
      top: 1rem;
      left: calc(50% - 1.5rem);
      color: #fff;
      width: 1.5rem;
      height: 1.5rem;
      border: 0.25rem solid #fff;
      border-top: none;
      border-left: none;
      transform-origin: 50% 50%;
      transform: rotate(45deg);
      animation: arrow 2s infinite;
    }

    @-webkit-keyframes arrow {
      0% {
        opacity: 0;
        -webkit-transform: translate(0, 0px) rotate(45deg);
      }
      50% {
        opacity: 1;
        -webkit-transform: translate(0, 10px) rotate(45deg);
      }
      100% {
        opacity: 0;
        -webkit-transform: translate(0, 20px) rotate(45deg);
      }
    }
  }
}
</style>
