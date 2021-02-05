<template>
  <header class="header">
    <div class="portrait">
      <span>YUE Blog</span>
      <img src="@/assets/portrait.svg" alt="LOGO" />
    </div>
    <nav>
      <router-link to="/" :class="[plusOne === 'Home' ? 'check' : '']">
        首页
      </router-link>
      <router-link
        to="/artlice"
        :class="[plusOne === 'Artlice' ? 'check' : '']"
      >
        文章
      </router-link>
      <router-link to="/note" :class="[plusOne === 'Note' ? 'check' : '']">
        笔记
      </router-link>
      <router-link to="/about" :class="[plusOne === 'About' ? 'check' : '']">
        关于
      </router-link>
    </nav>
    <div class="search">
      <i class="iconfont icon-sousuo"></i>
      <input
        type="text"
        aria-label="搜索"
        autocomplete="off"
        spellcheck="false"
      />
    </div>
  </header>
</template>

<script>
import { reactive, toRefs, toRaw, computed } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "Header",
  setup() {
    const data = reactive({
      head: ""
    });

    const route = useRoute();
    const plusOne = computed({
      get: () => toRaw(route).name.value
    });

    return { ...toRefs(data), plusOne };
  }
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 70px;
  background: #fff;
  border-bottom: 1px solid rgb(211, 211, 211);

  display: flex;
  align-items: center;
  justify-content: space-around;

  .portrait {
    display: flex;
    img {
      width: 60px;
      height: 65px;
    }
    span {
      line-height: 65px;
      font-size: 20px;
    }
  }
  nav {
    width: 450px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      font-size: 20px;
      font-weight: 600;
      font-family: "PingFang SC";
      &::after {
        content: "";
      }
    }
    .check {
      color: chocolate;
    }
  }
  .search {
    flex: 0 0 auto;
    vertical-align: top;
    display: inline-block;
    position: relative;
    margin-right: 1px;
    border: 1px solid #999;
    padding: 5px 10px;
    border-radius: 8px;

    .search-box .iconfont {
      z-index: 0;
      margin: auto;
    }

    input {
      padding-left: 10px;
      font-size: 18px;
      max-width: 150px;
      border: none;
      outline: none;
    }

    input:focus {
      border: none;
    }
  }
}

@media (max-width: 800px) {
  header {
    .search {
      cursor: pointer;
      width: 0;
      border-color: transparent;
      position: relative;
    }
  }
}
</style>
