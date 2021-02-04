<template>
  <div class="home">
    <Header />
    {{ agent }}
  </div>
</template>

<script>
import Header from "@/components/Header";
import { onMounted, ref } from "vue";
export default {
  name: "Home",
  components: {
    Header
  },
  setup() {
    const agent = ref("");

    const order = () => {
      let ua = window.navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        console.log("微信端");
        agent.value = 1;
      } else if (ua.match(/Alipay/i) == "alipay") {
        console.log("支付宝端");
        agent.value = 2;
      } else {
        console.log("其他浏览器");
        agent.value = 3;
      }
    };
    onMounted(() => {
      order();
    });

    return {
      agent
    };
  }
};
</script>
