<template>
  <div class="abstract-item">
    <div
      class="cover-wrap flyl"
      :style="{
        background:
          'url(https://zyj_yida.gitee.io/source/img/indexbg/43.jpg) center center / cover no-repeat',
      }"
    ></div>
    <div class="abstract-content-wrap flyl" :style="{ marginLeft: '5%' }">
      <div class="title">标题标题</div>
      <div class="iconfont reco-account">
        <i> <span>作者：跃</span></i> <i> <span>时间: 2021/04/09</span></i>
        <i> <span>标签: vue</span> </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
  &:hover {
    box-shadow: var(--box-shadow-hover);
  }
  & > div {
    pointer-events: auto;
  }
  .cover-wrap {
    width: 40%;
    flex: 1;
    transition: 1s ease-out;
    border-radius: 0.5rem;
    overflow: hidden;
    height: 12.5rem;
    position: relative;
    text-align: center;
  }
  .abstract-content-wrap {
    width: 55%;
    height: 12rem;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    display: flex;
    transition: all 0.3s;
    .title {
      position: relative;
      font-size: 1.28rem;
      line-height: 46px;
      color: var(--text-color);
      font-weight: bold;
      display: inline-block;
      &:hover {
        color: var(--text-color-hover);
      }
    }
    .reco-account {
      display: flex;
    }
  }
  .flyl {
    float: left;
  }
}
</style>
