<template>
  <header class="header">
    <div class="header-logo">
      <img :src="logoUrl" alt="logo">
    </div>
    <div class="menu">
      <ul class="menu-list">
        <li class="menu-item">
          Главная
        </li>
      </ul>
    </div>
    <div class="burger">
      |||
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps({
  logoUrl: {
    type: String,
    default: "",
    required: false
  }
});
</script>

<style scoped>
.header {
  display: flex;
  width: 100%;
  position: relative;
}
.header-logo {
  width: 200px;
  height: 50px;
}
.burger {
  width: 50px;
  height: 50px;
}
.menu {
  width: 100%;
  height: 50px;
}
.menu-list {
  font-size: 14px;
}
.menu-item {
  background-color: #aaa;
}
</style>
