<template>
  <a-layout>
    <Header></Header>
    <a-layout :style="{ height: '100vh', marginTop: '64px' }"><Sider></Sider>
      <a-layout>
        <div v-if="banner.length !== 0">
          <Content v-bind:banner="banner"></Content>
        </div>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import Header from "./components/Header.vue";
import Sider from "@/components/Sider";
import Content from '@/components/Content'

export default {
  data() {
    return { seen: true, banner: [], message: "" };
  },
  methods: {
    async getBanner() {
      const res = await fetch(`http://tohsaka888.xyz:3000/banner`);
      const data = await res.json();
      this.banner = data.banners;
      console.log(this.banner)
    },
  },
  created() {
    this.getBanner();
  },
  name: "App",
  components: {
    Header,
    Sider,
    Content,
  },
};
</script>
<style>
</style>
