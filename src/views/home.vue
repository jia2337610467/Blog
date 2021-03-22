<template>
  <Jhead />
  <!-- 轮播图 -->
  <Jbanner />
  <div class="main">
    <div>
      推荐列表
    </div>
    <div class="index" :ref="home">{{ name }}</div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed } from "vue";
import { useStore } from "vuex";
import Jhead from "comps/head.vue";
import Jbanner from "comps/banner.vue";
export default {
  components: {
    Jhead,
    Jbanner,
  },
  setup() {
    const store = useStore();
    // 获取dom
    const home = ref(null);
    // 响应数据
    const data = reactive({
      name: "首页",
    });

    console.log(home.value);
    return {
      ...toRefs(data),
      token: computed(() => store.state.token),
      home,
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding-top: 80px;
  color: brown;
}
</style>
