<template>
  <div class="swipeItem">
    <slot />
  </div>
</template>

<script>
export default {
  setup(props) {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.swipeItem {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
}
</style>
