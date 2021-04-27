<template>
  <a-layout-content>
    <div :style="{ display: 'flex',justifyContent: 'center' }">
      <a-carousel :style="{ width: '50vw', height: '30vh' }">
        <div v-for="item in banner" :key="item.index">
          <img :src="item.imageUrl" alt="none" :style="{ width: '50vw' }" />
        </div>
      </a-carousel>
    </div>
  </a-layout-content>
</template>

<script>
export default {
  methods: {
    do() {
      console.log(this.banner);
    },
  },
  created() {
    this.do();
  },
  name: "Content",
  props: {
    banner: Array,
  },
};
</script>

<style lang="scss" scoped>
</style>