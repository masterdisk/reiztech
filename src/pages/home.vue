<script setup lang="ts">
import FilterBar from "../components/FilterBar.vue";
import ListViewer from "../components/ListViewer.vue";
</script>

<template>
  <div class="container">
    <span class="title"> Products Information</span>
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

@media only screen and (max-width: 1440px) {
  .list-container {
    max-width: 1130px;
    width: calc(100% + 1px);
    margin-top: 34px;
    max-height: 750px;
    overflow-y: scroll;
    border-radius: 3px;
    background: white;
  }

}

@media only screen and (min-width: 1440px) {
  .list-container {
    width: calc(100% + 1px);
    margin-top: 34px;
    max-height: 750px;
    overflow-y: scroll;
    border-radius: 3px;
    background: white;
  }

}

.title{
  color: #000;
}
</style>