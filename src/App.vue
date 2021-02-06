<template>
  <Header />
  <router-view class="view" />
  <Footer />
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
#app {
  font-family: PingFang SC, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 70px;
}
.view {
  min-height: calc(100vh - 121px);
}
</style>
