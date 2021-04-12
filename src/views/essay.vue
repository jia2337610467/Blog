<template>
  <div>
    <Jheader :height="40" />
    <div class="main">
      <div class="tab">标题</div>
      <Yabstract v-for="item in list" :key="item" />
    </div>
  </div>
</template>

<script>
import Yabstract from "comps/abstract/index.vue";
import Jheader from "comps/Header/index.vue";
export default {
  components: { Yabstract, Jheader },
  setup() {
    const name = "随笔";
    const list = [1, 2, 3, 4, 5];

    return {
      name,
      list,
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  max-width: 860px;
  margin: 0px auto;
  padding: 4.6rem 2.5rem 0px;
}
</style>
