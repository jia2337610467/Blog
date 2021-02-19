<template>
  <div class="about">
    <h1>Hello ，我是YUE</h1>
    <h2>欢迎来到我的博客🎉</h2>
    <h3>{{ msgs }} <span class="cursor"> _ </span></h3>
    <div class="icon"></div>
    <iframe
      frameborder="0"
      scrolling="no"
      src="https://www.html5tricks.com/demo/html5-canvas-3d-model-camera/index.html"
      width="50%"
      height="500px"
    ></iframe>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  name: "About",
  setup() {
    const msg =
      "我是一只小猴纸，在这个地方记录工作学习中遇到的问题和总结，有不对的地方还请大家帮忙指正，谢谢!😜";
    let msgarr = msg.split("");
    let msgs = ref("");

    const write = (i) => {
      return setTimeout(() => {
        msgs.value = msgs.value + msgarr[i];
      }, i * 300);
    };

    onMounted(() => {
      for (let i = 0; i < msgarr.length; i++) {
        write(i);
      }
    });

    return {
      msgs,
    };
  },
};
</script>

<style lang="scss" scoped>
.about {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
  h1 {
    line-height: 7vh;
  }
  h3 {
    @-webkit-keyframes Blink {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes Blink {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    .cursor {
      -webkit-animation: Blink 1s ease-in 0s infinite;
      animation: Blink 1s ease-in 0s infinite;
    }
  }
}
</style>
