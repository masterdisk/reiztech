<script setup lang="ts">
import FilterBar from "../components/FilterBar.vue";
import ListViewer from "../components/ListViewer.vue";

const emit = defineEmits(['changeRoute'])

function changeRoute(componentName:string) {
    emit('changeRoute', componentName)
}
</script>

<template>
  <div class="container">
    <span class="title"> Products Information</span>
    <div class="filters-container">
      <FilterBar title="Title"  filter="title"/>
      <FilterBar title="Brand"  filter="brand"/>
    </div>
    <div class="list-container">
     <ListViewer/>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 0 2.5em 1.875em 2.5625em;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background-color: #F8F8F8;
}

.filters-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  gap: 22px;
}

.list-container {
  max-width: 1130px;
  width: calc(100% + 1px);
  margin-top: 34px;
  max-height: 750px;
  overflow-y: scroll;
  border-radius: 3px;
  background: white;
}

.title{
  color: #000;
}
</style>