<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/MyAppheader.vue";

export default defineComponent({
  components: {
    Header,
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
