<template>
  <div class="Jbanner" ref="swipe">
    <div
      class="swiper"
      ref="swipes"
      :style="{ transform: `translateX(${leng}px)` }"
    >
      <slot />
    </div>
    <div class="swipe-but">
      <el-button type="primary" @click="onLeft">左边</el-button>
      <el-button type="primary" @click="onRight">右边</el-button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, onMounted } from "vue";
export default {
  props: {},
  setup(props, { emit }) {
    // 读取参数
    const {} = toRefs(props);

    // 参数
    const data = reactive({
      leng: 0, //当前滚动的位置
      swipe: null,
      swipes: null,
      num: 0, //轮播图数量
    });

    onMounted(() => {
      setTimeout(() => {
        data.num = data.swipes.children.length - 1;
      });
    });

    const methods = reactive({
      onLeft: () => {
        let width = data.swipe.offsetWidth;
        if (data.leng != 0) data.leng = data.leng + width;
      },
      onRight: () => {
        let width = data.swipe.offsetWidth;
        if (data.num * width > -data.leng) {
          data.leng = data.leng - width;
        }
      },
    });

    return {
      ...toRefs(data),
      ...toRefs(methods),
    };
  },
};
</script>

<style lang="scss" scoped>
.Jbanner {
  width: 100%;
  height: 300px;
  position: relative;
  cursor: pointer;
  background-color: #fff;
  overflow: hidden;

  .swiper {
    transition-duration: 500ms;
    height: 100%;
    display: flex;
  }

  .swipe-but {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
  }
}
</style>
