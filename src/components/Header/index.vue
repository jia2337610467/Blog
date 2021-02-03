<template>
  <div class="header">
    <div class="header-portrait">
      <span>Blog</span>
      <img src="@/assets/portrait.svg" alt="LOGO" />
    </div>
    <div class="header-list">
      <router-link to="">首页</router-link>
      <router-link to="">文章</router-link>
      <router-link to="">笔记</router-link>
      <router-link to="">关于</router-link>
    </div>
    <div class="header-search">
      <i class="iconfont icon-sousuo"></i>
      <input
        type="text"
        aria-label="搜索"
        autocomplete="off"
        spellcheck="false"
      />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "Header",
  setup() {
    const data = reactive({
      head: ""
    });

    return { ...toRefs(data) };
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 70px;
  background: #fff;
  border-bottom: 1px solid rgb(211, 211, 211);
  display: flex;
  align-items: center;
  justify-content: space-around;
  &-portrait {
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
  &-list {
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
  }
  &-search {
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
      padding-left: 5px;
      width: 150px;
      font-size: 18px;
      border: none;
    }

    input:focus {
      border: none;
    }
  }
}

@media (max-width: 800px) {
  .header {
    .search {
      cursor: pointer;
      width: 0;
      border-color: transparent;
      position: relative;
    }
  }
}
</style>
