<template>
  <!-- 主要内容 -->
  <div class="main">
    <div>推荐列表</div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {},
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
  min-height: 100vh;
  img {
    width: 100%;
    height: 100%;
  }
}
.main {
  color: brown;
}
</style>
