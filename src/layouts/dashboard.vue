<script lang="ts" setup>
import SideBar from "../components/SideBar.vue";
import TopBar from "../components/TopBar.vue";
</script>

<template>
  <div class="container-layout">
    <div class="sidebar">
      <SideBar/>
    </div>
    <div class="navbar">
      <TopBar/>
      <slot/>
    </div>
  </div>
</template>

<style scoped>

</style>