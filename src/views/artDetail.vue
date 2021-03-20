<template>
  <div class="index">
    <h1>原型到原型链</h1>
    <p>
      那么这个函数的prototype 指向的是什么呢 其实函数的prototype 指向了一个对象
      ，这个对象就是调用该函数而构建的实例的原型，也就是person 和person1的原型；
      什么事原型呢？
    </p>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "artDetail",
  setup() {
    //   获取页面参数
    const route = useRoute();
    // 获取文章id
    const id = ref(route.params.id);
    
    console.log(id.value);
    return { id };
  },
};
</script>

<style lang="scss" scoped>
.index {
  max-width: 800px;
  margin: 0 auto;
}
</style>
