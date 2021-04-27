<template>
  <a-layout-sider theme="light" collapsible>
    <a-menu
      :style="{ height: '100vh', borderRight: 'none', textAlign: 'center' }"
      :default-selected-keys="['1']"
    >
      <a-menu-item key="1">item-1</a-menu-item>
      <a-menu-item key="2">item-2</a-menu-item>
      <a-menu-item key="3">item-3</a-menu-item>
      <a-menu-item key="4">item-4</a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: "Sider",
};
</script>

<style lang="scss" scoped>
</style>