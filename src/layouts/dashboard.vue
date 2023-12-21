<script lang="ts" setup>
import {defineComponent, DefineComponent, onBeforeMount, onMounted, shallowRef} from "vue";
import Home from "../pages/home.vue";
import MoreDetails from '../pages/moreDetails.vue';
import TopBar from "../components/TopBar.vue";
import SideBar from "../components/SideBar.vue"; // Assuming you have a NotFound component

type PageComponent = DefineComponent<{}, {}, any>;

const currentPage = shallowRef<PageComponent>(Home);

const url = new URL(window.location.href).pathname;

onBeforeMount(() => {

  if (url === '/') {
    currentPage.value = Home;
  } else  {
    currentPage.value = MoreDetails;
  }
})
</script>

<template>
  <div class="container-layout">
    <div class="sidebar">
      <SideBar/>
    </div>
    <div class="navbar">
      <TopBar/>
      <component  :is="currentPage" />
    </div>
  </div>
</template>

<style scoped>

</style>