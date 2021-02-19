<template>
  <div class="hero">
    <div class="hero-background">
      <video autoplay loop muted poster="headimg">
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-aerial-panorama-of-a-coast-and-its-reliefs-36615-large.mp4"
          type="video/mp4"
        />
        <source
          src="https://static.pexels.com/lib/videos/free-videos.webm"
          type="video/webm"
        />
      </video>
    </div>
    <section class="hero-content">
      <h1>欢迎来到YUE的BLOG</h1>
    </section>
  </div>

  <main class="artlice">
    <div
      class="box"
      v-for="item in [1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1]"
      :key="item"
    >
      <img class="img" :src="item == 1 ? img1 : img2" alt="pic" />
      <div>
        <h2>原型到原型链</h2>
        <p>
          那么这个函数的prototype 指向的是什么呢 其实函数的prototype
          指向了一个对象
          ，这个对象就是调用该函数而构建的实例的原型，也就是person
          和person1的原型； 什么事原型呢？
        </p>
      </div>
    </div>
  </main>

  <div class="home">
    <audio
      controls="controls"
      hidden
      :src="require('@/assets/audio/13716.wav')"
      ref="audio"
    ></audio>
  </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs } from "vue";
import { isPC } from "@/hooks/multiport";
export default {
  name: "Home",
  setup() {
    const audio = ref(null);
    let data = reactive({
      headimg: "",
      img1:
        "https://images.pexels.com/photos/4255484/pexels-photo-4255484.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      img2:
        "https://images.pexels.com/photos/4765139/pexels-photo-4765139.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      currentTime: 0,
      ok: () => {
        setTimeout(() => {
          data.oks();
        }, 1000);
      },
      oks: () => {
        audio.value.currentTime = 0; //从头开始播放提示音
        audio.value.play(); //播放
      },
    });
    onMounted(() => {
      if (!isPC())
        data.headimg =
          "https://images.unsplash.com/photo-1610384458867-67792bc5a7a6?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    });

    return {
      ...toRefs(data),
      audio,
    };
  },
};
</script>

<style lang="scss" scoped>
.hero {
  top: -70px;
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  color: rgb(255, 255, 255);
  background-color: rgb(211, 211, 211);
  height: 100%;
  max-height: 500px;
  min-height: 380px;
  z-index: 1;
  padding: 74px 1.15rem 66px;
  text-decoration: none;
  // 背景
  &-background {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    img,
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background: rgb(35, 42, 52);
    }
  }
  &-content {
    max-width: 650px;
    width: 100%;
    z-index: 3;
    h1 {
      font-size: 45px;
    }
  }
}
.artlice {
  margin: 10px 15%;
  -moz-columns: 300px 4; /* Firefox */
  -webkit-columns: 300px 4; /* Safari �� Chrome */
  columns: 300px 4; /* 将 div 元素中的文本分为2列，并规定列间1rem像素的间隔。 */
  .box {
    width: 300px;
    min-height: 100px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 1px #dddddd;
    -moz-page-break-inside: avoid;
    -webkit-column-break-inside: avoid;
    break-inside: avoid; /*break-inside: avoid; 避免元素内部断行并产生新列*/
    .img {
      width: 100%;
      height: auto;
    }
    p {
      padding: 10px;
    }
  }
}
.home {
  height: 100px;
}

@media screen and (max-width: 700px) {
  .artlice {
    margin: 10px auto;
    width: 96%;
    columns: 1;
    .box{
      width: 90%;
      margin: 0 auto 20px;
    }
  }
}
</style>