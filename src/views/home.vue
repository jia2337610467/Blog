<template>
  <main class="main">
    <div class="blog-list">
      <Yabstract />
    </div>
    <div class="info-wrapper">
      <div class="personal-info-wrapper">
        <img
          src="https://zyj_yida.gitee.io/source/img/ico/head.jpg"
          alt="author-avatar"
          class="personal-img"
        />
        <h3 class="name">YUE</h3>
      </div>
    </div>
  </main>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
import { useStore } from "vuex";
import Yabstract from "comps/abstract/index.vue"
export default {
  components: {Yabstract},
  setup() {
    const store = useStore();
    // 响应数据
    const data = reactive({});

    return {
      ...toRefs(data),
      token: computed(() => store.state.token),
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin: 3rem auto 0px;
  transition: all 0.25s ease-in-out 0.16s;
  transform: translateY(0px);
  opacity: 0.85 !important;
  display: flex;
  align-items: flex-start;
  margin: 20px auto 0;
  padding: 0 20px;
  max-width: 1126px;
  .blog-list {
    flex: auto;
    width: 0;
  }
  .info-wrapper {
    position: -webkit-sticky;
    position: sticky;
    top: 70px;
    overflow: hidden;
    transition: all 0.3s;
    margin-left: 15px;
    flex: 0 0 300px;
    height: auto;
    box-shadow: var(--box-shadow);
    border-radius: 0.25rem;
    box-sizing: border-box;
    padding: 0 15px;
    background: var(--background-color);
    .personal-info-wrapper {
      background-color: #fff;
      padding: 20px 0;
      margin-bottom: 20px;
      .personal-img {
        display: block;
        margin: 2rem auto 1rem;
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
      }
      .name {
        font-size: 1rem;
        text-align: center;
        color: var(--text-color);
      }
    }
  }
}
</style>
