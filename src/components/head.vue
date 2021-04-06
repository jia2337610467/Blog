<template>
  <header class="j-header-wrapper">
    <nav class="j-header">
      <div class="logo" @click="onLogo">
        <img src="@/assets/image/logo.png" alt="LOGO" />
      </div>
      <div class="header">
        <ul class="headerul">
          <li class="headerli" @click="onRoute('/')">首页</li>
          <li class="headerli" @click="onRoute('Essay')">笔记</li>
        </ul>
      </div>
    </nav>
  </header>
  <div class="bg">
    <img src="@/assets/image/bg-1.jpg" alt="背景图" />
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup(props, ctx) {
    console.log(props);
    const router = useRouter();

    const onLogo = () => {
      ctx.emit("myclick");
    };

    // 跳转页面
    const methods = reactive({
      onRoute: (e) => {
        router.push(e);
      },
    });

    return {
      onLogo,
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
  width: 100vw;
  height: 55vh;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit:cover;
  }
}
</style>
