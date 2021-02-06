<template>
  <header class="header">
    <div class="portrait">
      <!-- <span>YUE Blog</span> -->
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
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <input
          type="text"
          aria-label="搜索"
          autocomplete="off"
          spellcheck="false"
          placeholder="深入浅出Vue.js"
          v-model="key"
          @focus="focus"
          @blur="blur"
        />
        <ul v-show="keywordList" class="keyword-list">
          <li @mousedown="check('深入浅出Vue.js')">深入浅出Vue.js</li>
          <li>深入浅出Vue.js</li>
          <li>深入浅出Vue.js</li>
          <li>深入浅出Vue.js</li>
          <li>深入浅出Vue.js</li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { reactive, toRefs, toRaw, computed } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "Header",
  setup() {
    const data = reactive({
      head: "",
      key:null,
      keywordList: false,
    });

    const methoud = reactive({
      focus:() => {
        data.keywordList = true;
      },
      blur: () => {
        data.keywordList = false;
      },
      check: (e) => {
        // 防止使用click导致和blur事件冲突 使用mousedown（鼠标按下选中dom执行） 该方法优先级高于blur
        data.key = e
      }
    })

    const route = useRoute();
    const plusOne = computed({
      get: () => toRaw(route).name.value,
    });

    return { ...toRefs(data),...toRefs(methoud), plusOne };
  },
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
    flex: 0.5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      font-size: 18px;
      font-weight: 500;
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

    .keyword-list{
      position: absolute;
      top: 33px;
      left: 0;
      width: 165px;
      border: 2px solid cadetblue;
      background-color: #fff;
      border-top: none;
      text-align: left;
      padding-left: 10px;
      li{
        padding:7px 0;
        border-bottom: .5px solid #f0eeee;
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
    }
  }
}
</style>
