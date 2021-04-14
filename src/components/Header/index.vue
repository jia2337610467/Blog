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
          >{{ item.name }}</li>
        </ul>
      </div>
    </nav>
  </header>

  <div class="bg" :style="{ height: `${bgHeight}vh` }">
    <img :src="bgimg" alt="背景图" />
    <div class="main">
      <h1>{{ bgTitle }}</h1>
      <p class="description">{{ bgTitleEN }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import img from "@/utils/image"

export default defineComponent({
  props: ["height", "headine", "subhead"],
  setup(props, ctx) {
    const router = useRouter();
    console.log(props);
    // 背景图高度
    const bgHeight = computed({
      get: () => props.height || 80
    });

    // 定义变量
    const data = reactive({
      bgTitle: computed({ get: () => props.headine || "人生来来往往，来日并不方长。" }),
      bgTitleEN: computed({ get: () => props.subhead || "Life comes and goes, and the future is not long. " }),
      bgimg: img.getImg()
    });

    // 跳转页面
    const methods = reactive({
      onRoute: (e) => {
        router.push(e);
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
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .main {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 100%;
    text-align: center;
    h1 {
      margin: 0 auto 1.8rem;
      font-size: 2.5rem;
      color: rgb(255, 255, 255);
      font-family: Regular, cursive;
      transition: all 0.25s ease-in-out 0.04s;
      transform: translateY(0px);
      opacity: 1;
    }
    .description {
      margin: 1.8rem auto;
      font-size: 1.6rem;
      line-height: 1.3;

      color: rgb(255, 255, 255);
      font-family: Regular, cursive;
      transition: all 0.25s ease-in-out 0.08s;
      transform: translateY(0px);
      opacity: 1;
    }
  }
}
</style>
