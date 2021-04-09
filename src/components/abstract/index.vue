<template>
  <div class="abstract-wrapper">
    <div class="abstract-item"></div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.abstract-wrapper {
  width: 100%;
  .abstract-item {
    position: relative;
    margin: 0 auto 20px;
    padding: 16px 20px;
    width: 100%;
    overflow: hidden;
    border-radius: 0.25rem;
    box-shadow: var(--box-shadow);
    box-sizing: border-box;
    transition: all 0.3s;
    background-color: var(--background-color);
    cursor: pointer;
  }
}
</style>