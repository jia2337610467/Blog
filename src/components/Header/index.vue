<template>
  <header :class="['header', plusOne === 'Home' && home ? 'home' : '']">
    <div class="portrait">
      <!-- <span>YUE Blog</span> -->
      <img src="@/assets/logo2.png" alt="LOGO" />
    </div>
    <nav class="header-nav">
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
          <i class="iconfont icon-sousuo"></i>
        </label>
        <ul v-show="keywordList" class="keyword-list">
          <li v-for="item in hot" :key="item" @mousedown="search = item">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="mobilbut">
          
      </div>
    </nav>
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
     * @data 变量集合
     * @hot {Array} 搜索热点
     * @search {string} 搜索内容
     * @keywordList {boolean} 是否显示搜索推荐
     * @home {boolean} 是否为首页
     */
    const data = reactive({
      hot: ["深入浅出vue.js", "Vue2", "Vue3", "ES6"],
      search: null,
      keywordList: false,
      home: true,
    });

    const methoud = reactive({});

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

    return { ...toRefs(data), ...toRefs(methoud), plusOne };
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: none !important;
  border: none !important;

  .header-nav {
    a {
      color: #fff !important;
    }
    .search {
      input {
        border: 1px solid #fff;
      }
    }
    .check {
      color: chocolate !important;
    }
  }
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 0 25px;
  width: calc(100% - 50px);
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid rgb(231, 231, 231);
  justify-content: space-between;
  transition: 0.5s;

  .portrait {
    display: flex;
    img {
      width: 60px;
      height: 50px;
    }
    span {
      line-height: 50px;
      font-size: 17px;
    }
  }
  &-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      color: #000;
      font-size: 19px;
      font-weight: 500;
      font-family: "PingFang SC";
      margin-right: 15px;
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
    background-color: #fff;
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
