<template>
  <header class="j-header-wrapper">
    <nav class="j-header">
      <div class="logo" @click="onLogo">{{ logo }}</div>
      <div class="header">
        <ul class="headerul">
          <li class="headerli">首页</li>
          <li class="headerli">笔记</li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import {} from "vue";
export default {
  name: "Jhead",
  props: {
    logo: {
      type: String,
      default: "LOGO",
    },
  },
  setup(props, ctx) {
    const onLogo = () => {
      ctx.emit("myclick", { logo: 222 });
    };

    return {
      onLogo,
    };
  },
};
</script>

<style lang="scss">
.j-header-wrapper {
  height: 72px;
  width: 100%;
  position: absolute;
  z-index: 10000;
}
.j-header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  padding: 0 30px;
  backdrop-filter: saturate(180%) blur(6px);
  background-color: #fff;
  cursor: pointer;

  .logo {

  }
  .header {
    position: relative;
  }
  .headerul {
    display: flex;
    align-items: center;
    .headerli {
      color: #111;
      font-size: 15px;
      margin-right: 15px;
    }
  }
}
</style>
