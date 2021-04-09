<template>
  <header class="j-header-wrapper">
    <nav class="j-header">
      <div class="logo" @click="onLogo">
        <img src="@/assets/image/logo.png" alt="LOGO" />
      </div>
      <div class="header">
        <ul class="headerul">
          <li
            class="headerli"
            v-for="item in head"
            @click="onRoute(item.route)"
            :key="item.id"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <div class="bg" :style="{ height: `${bgHeight}vh` }">
    <img src="@/assets/image/bg-1.jpg" alt="背景图" />
  </div>
</template>

<script>
import { defineComponent, computed, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  props: ["height"],
  setup(props, ctx) {
    const router = useRouter();
    // 背景图高度
    const bgHeight = computed({
      get: () => props.height || 70,
      set: (val) => {
        console.log(val);
      },
    });
    // 点击回调函数
    const onLogo = () => {
      ctx.emit("myclick");
    };
    // 跳转页面
    const methods = reactive({
      onRoute: (e) => {
        router.push(e);
      },
    });
    // 导航路由
    const head = [
      { name: "首页", route: "/", id: 0 },
      { name: "笔记", route: "Essay", id: 1 },
    ];

    return {
      onLogo,
      head,
      bgHeight,
      ...toRefs(methods),
    };
  },
});
</script>

<style lang="scss">
.j-header-wrapper {
  height: 72px;
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
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;

  .logo {
    img {
      width: 200px;
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
      color: #111;
      font-size: 19px;
      margin-right: 15px;
      padding-right: 10px;
    }
  }
}

.bg {
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
