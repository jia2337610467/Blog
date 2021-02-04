<template>
  <div class="home">
    {{ agent }}
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  name: "Home",
  setup() {
    const agent = ref("我是首页");

    onMounted(() => {
      console.log('开始生命周期');
    });

    return {
      agent
    };
  }
};
</script>
