<template>
  <main>
    <section>
      <div class="box" v-for="(item, index) in list" :key="index">
        <p class="title">{{ item.title }}</p>
        <p class="msg">{{ item.message }}</p>
        <p class="tag">{{ item.tag }}</p>
      </div>
    </section>
    <aside>
      <p class="main-title">目录</p>
      <p class="main-title">标签</p>
    </aside>
  </main>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
export default {
  setup() {
    let data = reactive({
      list: []
    });

    let methoud = reactive({
      getList: () => {
        setTimeout(() => {
          for (let i = 0; i < 40; i++) {
            const id = data.list.length + 1;
            data.list.push({
              id,
              title: `标题${id}`,
              tag: ["vue"],
              message: "我是详细信息"
            });
          }
        }, 500);
      }
    });

    onMounted(() => {
      methoud.getList();
    });

    return {
      ...toRefs(data),
      ...toRefs(methoud)
    };
  }
};
</script>

<style lang="scss" scoped>
main {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  .main-title {
    text-align: center;
    margin: 10px 0;
  }
  section {
    flex: 0.7;
    .box {
      box-shadow: 0px 0px 1px 4px #9865;
      width: 100%;
      p {
        margin: 5px;
      }
    }
  }
  aside {
    flex: 0.25;
  }
}
</style>
