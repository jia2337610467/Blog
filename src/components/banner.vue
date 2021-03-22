<template>
  <div class="banner">
    <div class="swiper" ref="banner" :style="`transform:translateX(${leng}px)`">
      <div class="swipe-item" v-for="k in 10" :key="k">
        <span>{{ k }}</span>
      </div>
    </div>
    <div class="swipe-but">
      <el-button type="primary" @click="onLeft">左边</el-button>
      <el-button type="primary" @click="onRight">右边</el-button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  setup() {
    const banner = ref(null);
    const data = reactive({
      leng: 0, //当前滚动的位置
      itemleng: 0,//当前图的宽度  
    });

    const onLeft = () => {
      console.log("左边");
      if (data.leng != 0) data.leng = data.leng + 1200;
    };

    const onRight = () => {
      console.log("右边");
      if (data.leng != -(1200 * 8)) data.leng = data.leng - 1200;
    };

    return {
      banner,
      onLeft,
      onRight,
      ...toRefs(data),
    };
  },
};
</script>

<style lang="scss" scoped>
.banner {
  background-color: #fff;
  width: 1200px;
  height: 400px;
  overflow: hidden;
  position: relative;
  top: 70px;
  cursor: pointer;

  .swiper {
    width: 12000px;
    position: absolute;
    transition: all 0.4s;
    .swipe-item {
      float: left;
      width: 1200px;
      height: 400px;
      background-color: aquamarine;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid red;
    }
  }
  .swipe-but {
    position: absolute;
    width: 1200px;
    height: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    left: 0;
  }
}
</style>
