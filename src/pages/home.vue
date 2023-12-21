<script setup lang="ts">
import Dashboard from "../layouts/dashboard.vue";
import FilterBar from "../components/FilterBar.vue";
</script>

<template>
<Dashboard>
  <div class="container">
    <span class="title"> Products Information</span>
    <div class="filters-container">
      <FilterBar title="Title"  filter="title"/>
      <FilterBar title="Brand"  filter="brand"/>
    </div>
  </div>
</Dashboard>
</template>

<style scoped>
.container {
  padding: 0 2.5em 1.875em 2.5625em;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}

.filters-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  gap: 22px;
}
</style>