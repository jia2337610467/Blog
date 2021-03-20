<template>
  <header :class="['j-header', home ? 'none' : '']">
    <div class="logo">
      <div>
        <img src="@/assets/logo2.png" alt="LOGO" />
      </div>
    </div>
    <div class="header-nav">
      <ul class="header-ul">
        <li class="header-li">
          首页
        </li>
        <li class="header-li">
          文章
        </li>
        <li class="header-li">
          笔记
        </li>
        <li class="header-li">
          关于
        </li>
      </ul>
    </div>
    <!-- <nav :class="['header-nav', plusOne === 'Home' ? 'header-nav1' : '']">
      <router-link to="/" replace>
        首页
      </router-link>
      <router-link to="/artlice">
        文章
      </router-link>
      <router-link to="/note">
        笔记
      </router-link>
      <router-link to="/about">
        关于
      </router-link>
      <div class="search">
        <input
          id="search"
          type="text"
          aria-label="搜索"
          autocomplete="off"
          spellcheck="false"
          placeholder="Search"
          v-model="search"
          @focus="keywordList = true"
          @blur="keywordList = false"
        />
        <label for="search">
          <i class="iconfont icon-sousuo" ></i>
        </label>
        <ul v-show="keywordList" class="keyword-list">
          <li v-for="item in hot" :key="item" @mousedown="search = item">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="mobilbut"></div>
    </nav> -->
  
  </header>
</template>

<script>
import { reactive, toRefs, toRaw, computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "Header",
  setup() {
    const route = useRoute(); // 获取当前路由
    /**
     * @hot {Array} 搜索热点
     * @search {string} 搜索内容
     * @keywordList {boolean} 是否显示搜索推荐
     * @home {boolean} 是否为首页
     */
    const data = reactive({
      hot: ["Vue3.x", "Vue2.x", "CSS3", "ES6"],
      search: null,
      keywordList: false,
      home: true,
    });

    // 获取当前页面名称
    const plusOne = computed({
      get: () => toRaw(route).name.value,
    });

    // 获取当前滚动条的位置
    const scroll = () => {
      if (window.scrollY > 50) {
        data.home = false;
      } else {
        data.home = true;
      }
    };

    // 监听路由变化
    watchEffect(() => {
      if (plusOne.value == "Home") window.addEventListener("scroll", scroll);
      else window.removeEventListener("scroll", scroll);
    });

    return { ...toRefs(data), plusOne };
  },
};
</script>

<style lang="scss" scoped>
.none {
  backdrop-filter: none !important;
}

.j-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 0 25px;
  width: calc(100% - 50px);
  height: 72px;
  display: flex;
  align-items: center;
  backdrop-filter: saturate(180%) blur(6px);
  justify-content: space-between;
  transition: 0.5s;
  cursor: pointer;

  .logo {
    display: flex;
    align-items: center;
    height: 100%;
    z-index: 111;
    div {
      img {
        display: block;
        width: 60px;
      }
    }
  }

  .header-nav {
    position: relative;
    .header-ul {
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(18, 20, 28, 0.7);
      height: fit-content;
      position: relative;
      z-index: 10000;
    }
    .header-li {
      font-size: 15px;
      font-weight: 600;
      line-height: 1.5;
      transition: all 0.3s ease-out;
      margin-left: 15px;
    }
  }
  &-nav1 {
    a {
      color: #fff !important;
    }
  }
  .search {
    flex: 0 0 auto;
    vertical-align: top;
    display: inline-block;
    position: relative;
    margin-right: 1px;
    // background-color: #fff;
    border-radius: 20px;

    label {
      z-index: 0;
      line-height: 30px;
      padding: 0 10px;
    }

    input {
      padding-left: 15px;
      font-size: 15px;
      line-height: 30px;
      border-radius: 20px;
      border: 1px solid rgb(207, 207, 207);
    }
    input:focus {
      outline: none;
    }

    .keyword-list {
      position: absolute;
      top: 38px;
      left: 10px;
      opacity: 0;
      width: 190px;
      border-radius: 7px;
      background-color: rgb(243, 239, 239);
      text-align: left;
      padding-left: 10px;
      animation: mymove 0.2s forwards;
      animation-delay: 0.2s;
      li {
        cursor: pointer;
        padding: 2px 0;
      }
    }
    @keyframes mymove {
      from {
        transform: translateY(-10px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @-webkit-keyframes mymove /*Safari and Chrome*/ {
      from {
        left: 0px;
      }
      to {
        left: 200px;
      }
    }
  }
  .mobilbut {
    display: none;
  }
}

@media (max-width: 900px) {
  .header {
    &-nav {
      a {
        display: none;
      }
    }
    .mobilbut {
      display: block;
    }
  }
}
</style>
