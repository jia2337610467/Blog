<template>
  <div class="hero">
    <div class="hero-background">
      <video
        autoplay
        loop
        muted
        poster="headimg"
      >
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
      headimg: '',
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
      if(!isPC()) data.headimg = 'https://images.unsplash.com/photo-1610384458867-67792bc5a7a6?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
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
.home {
  height: 600px;
}
</style>