<template>
  <div>
    <Jheader />
    <div class="about">
      {{ title }}
    </div>
  </div>
</template>

<script>
import Jheader from "comps/Header/index.vue";
import { reactive, toRefs } from "vue";
export default {
  components: {
    Jheader,
  },
  setup() {
    const data = reactive({
      title: "关于我",
    });

    return {
      ...toRefs(data),
    };
  },
};
</script>

<style lang="scss" scoped>
.about {
}
</style>
