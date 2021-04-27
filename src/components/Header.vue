<template>
  <a-layout-header
    :style="{
      display: 'flex',
      alignItems: 'center',
      position: 'fixed',
      zIndex: 100,
      width: '100vw',
    }"
  >
    <a-avatar :style="{ marginRight: '2vw' }"><a-icon type="user" /></a-avatar>
    <a-menu
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
      :default-selected-keys="['index']"
    >
      <a-menu-item key="index"> 主页 </a-menu-item>
      <a-menu-item key="login"> 登录 </a-menu-item>
      <a-menu-item key="register"> 注册 </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
</style>