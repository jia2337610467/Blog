<template>
  <main>
    <section>
      <div class="box" v-for="(item, index) in list" :key="index">
        <div class="pictrue" v-show="item.img">
          <img :src="item.img" alt="图片" />
        </div>
        <div class="art">
          <h2>{{ item.title }}</h2>
          <p class="msg">{{ item.message }}</p>
          <div class="tag">
            <p v-for="items in item.tag" :key="items">{{ items }}</p>
          </div>
        </div>
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
      list: [],
    });

    let methoud = reactive({
      getList: () => {
        setTimeout(() => {
          for (let i = 0; i < 40; i++) {
            const id = data.list.length + 1;
            data.list.push({
              id,
              title: `标题${id}`,
              tag: ["vue", "js"],
              img: id%2 == 1?"https://images.pexels.com/photos/5902130/pexels-photo-5902130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500":"https://images.pexels.com/photos/4596636/pexels-photo-4596636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              message: "我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息我是详细信息",
            });
          }
        }, 500);
      },
    });

    onMounted(() => {
      methoud.getList();
    });

    return {
      ...toRefs(data),
      ...toRefs(methoud),
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  max-width: 1000px;
  margin: 5px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .main-title {
    text-align: center;
    margin: 10px 0;
  }
  section {
    flex: 0.7;
    .box {
      box-shadow: 0px 0px 8px 1px #9865;
      padding:5px 10px;
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      .pictrue{
        flex-shrink: 0;
        width: 180px;
        margin: -20px 0 0 -20px;
        height: auto; 
        img{
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
      .art {
        flex: .97;
        p{
           margin: 5px;
        }
        .msg{
          font-size: 15px;
          text-indent: 2em;
        }
        .tag {
          display: flex;
          align-content: space-around;
          p {
            background: rgba(189, 154, 83, 0.333);
            padding: 2px 6px;
            border-radius: 6px;
          }
        }
      }
    }
  }
  aside {
    flex: 0.25;
  }
}
</style>
