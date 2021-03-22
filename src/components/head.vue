<template>
  <header class="j-header-wrapper">
    <nav class="j-header">
      <div class="logo" @click="onLogo">
        <img src="@/assets/image/logo.png" alt="LOGO" />
      </div>
      <div class="header">
        <ul class="headerul">
          <li class="headerli" @click="onRoute('/')">首页</li>
          <li class="headerli" @click="onRoute('/essay')">笔记</li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "Jhead",
  props: {
    logo: {
      type: String,
      default: "LOGO",
    },
  },
  setup(props, ctx) {
    const router = useRouter();

    const onLogo = () => {
      ctx.emit("myclick");
    };

    // 跳转页面
    const onRoute = (e) => {
      console.log(e, router);
      router.push(e);
    };

    return {
      onLogo,
      onRoute,
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
      margin-right: 25px;
    }
  }
}
</style>
