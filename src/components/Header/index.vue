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
        <label for="search">
          <i class="iconfont icon-sousuo"></i>
        </label>
        <input
          id="search"
          type="text"
          aria-label="搜索"
          autocomplete="off"
          spellcheck="false"
          placeholder="深入浅出Vue.js"
          v-model="search"
          @focus="keywordList = true"
          @blur="keywordList = false"
        />
        <ul v-show="keywordList" class="keyword-list">
          <li v-for="item in hot" :key="item" @mousedown="search = item">
            {{ item }}
          </li>
        </ul>
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

    const methoud = reactive({
    });

    
    // 获取当前页面名称
    const plusOne = computed({
      get: () => toRaw(route).name.value
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
    watchEffect(()=>{
      if(plusOne.value == 'Home')window.addEventListener("scroll", scroll);
      else window.removeEventListener("scroll",scroll);
    })

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
      color: #FFF !important;
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
  background-color: #FFF;
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

    .iconfont {
      z-index: 0;
      margin: auto;
      position: absolute;
      top: 5px;
      left: 5px;
    }

    input {
      height: 30px;
      padding-left: 25px;
      font-size: 13px;
      max-width: 150px;
      border-radius: 5px;
      border: 1px solid #e0e0e0;
    }

    input:focus {
      border-radius: none;
      height: 30px;
      outline-color: cadetblue;
    }

    .keyword-list {
      position: absolute;
      top: 33px;
      opacity: 0;
      left: 0;
      width: 165px;
      border: 2px solid cadetblue;
      background-color: #fff;
      border-top: none;
      text-align: left;
      padding-left: 10px;
      animation: mymove 0.3s forwards;
      animation-delay: 0.3s;
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
}

@media (max-width: 900px) {
  header {
    .search {
      cursor: pointer;
      width: 0;
      border-color: transparent;
      position: relative;
      input {
        width: 0;
        height: 0;
        border: none;
      }
    }
  }
}
</style>
