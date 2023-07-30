<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/MyAppheader.vue";
import Footer from "@/components/FooterCom.vue";
export default defineComponent({
  components: {
    Header,
    Footer,
  },
});
</script>

<style lang="less">

#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
}
header {
  margin: 0;
}

</style>
