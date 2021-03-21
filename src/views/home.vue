<template>
  <Jhead />
  <div class="index" :ref="home">{{ name }}</div>
</template>

<script>
import { ref, reactive, toRefs, computed } from "vue";
import { useStore } from "vuex";
import Jhead from "comps/head.vue";
export default {
  components: {
    Jhead,
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
.index {
  color: brown;
}
</style>
