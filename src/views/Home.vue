<template>
  <div class="home">
    <audio
      controls="controls"
      hidden
      :src="require('@/assets/audio/13716.wav')"
      ref="audio"
    ></audio>
    <span @click="ok">点击</span>
  </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs } from "vue";
export default {
  name: "Home",
  setup() {
    const audio = ref(null);
    let data = reactive({
      currentTime: 0,
      ok: () => {
        setTimeout(() => {
          data.oks();
        }, 1000);
      },
      oks: () => {
        audio.value.currentTime = 0; //从头开始播放提示音
        audio.value.play(); //播放
      }
    });
    onMounted(() => {});

    return {
      ...toRefs(data),
      audio
    };
  }
};
</script>
