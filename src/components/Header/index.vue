<template>
  <div class="header">
    <div class="header-portrait">
      <img src="@/assets/portrait.svg" alt="LOGO" />
    </div>
    <div class="header-list">
      <router-link to="">首页</router-link>
      <router-link to="">文章</router-link>
      <router-link to="">笔记</router-link>
      <router-link to="">关于</router-link>
    </div>
    <div class="header-search">
      <i class="icon-sousuo"></i>
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
    img {
      width: 60px;
      height: 65px;
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
  }
}
</style>
