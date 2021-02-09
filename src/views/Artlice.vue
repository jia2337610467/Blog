<template>
  <main>
    <section>
      <div v-if="list.length === 0" class="load">
        <svg-icon icon-class="loading" class="load-svg" />
      </div>

      <div class="box" v-for="(item, index) in list" :key="item.id + `${index}`">
        <div class="pictrue" v-show="item.user.avatar">
          <img :src="item.user.avatar" alt="图片" />
        </div>
        <div class="art">
          <h2>{{ item.title }}</h2>
          <p>{{item.user.username}}</p>
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
import { artList } from "@/network/api/artlice";
export default {
  setup() {
    let data = reactive({
      list: [],
    });

    let methoud = reactive({
      getList: () => {
        artList({
          category: "frontend",
          limit: 30,
          offset: 0,
          order: "heat",
        }).then((res) => {
          if (res) {
            console.log(res.data);
            data.list = res.data;
          }
        });
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

  section {
    flex: 0.7;
    .load {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      &-svg {
        width: 3em;
        height: 3em;
      }
    }
    .box {
      box-shadow: 0px 0px 8px 1px #9865;
      padding: 5px 10px;
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      .pictrue {
        flex-shrink: 0;
        width: 180px;
        margin: -20px 0 0 -20px;
        height: auto;
        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
      .art {
        flex: 0.97;
        p {
          margin: 5px;
        }
        .msg {
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
    .main-title {
      text-align: center;
      margin: 10px 0;
    }
  }
}
</style>
