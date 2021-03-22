<template>
  <Jhead />
  <!-- 轮播图 -->
  <Jbanner class="banner">
    <Jswipe-item>
      <img src="@/assets/image/bg-1.jpg" alt="背景" />
    </Jswipe-item>
    <Jswipe-item>
      <img src="@/assets/image/bg-2.jpg" alt="背景" />
    </Jswipe-item>
    <Jswipe-item>
      <img src="@/assets/image/bg-3.png" alt="背景" />
    </Jswipe-item>
    <Jswipe-item>
      <img src="@/assets/image/bg-4.jpg" alt="背景" />
    </Jswipe-item>
  </Jbanner>

  <!-- 主要内容 -->
  <div class="main">
    <div>推荐列表</div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed } from "vue";
import { useStore } from "vuex";
import Jhead from "comps/head.vue";
import Jbanner from "comps/banner.vue";
import JswipeItem from "comps/swipeItem.vue";
export default {
  components: {
    Jhead,
    Jbanner,
    JswipeItem,
  },
  setup() {
    const store = useStore();
    // 获取dom
    const home = ref(null);
    // 响应数据
    const data = reactive({
      name: "首页",
    });

    return {
      ...toRefs(data),
      token: computed(() => store.state.token),
      home,
    };
  },
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 100vh;

  img{
    width: 100%;
    height: auto;
  }
}
.main {
  color: brown;
}
</style>
