<script setup lang="ts">
import {ref} from "vue";

const {title, filter} = defineProps({
  title: {
    type: String,
    required: true
  },
  filter: {
    type: String,
    required: true
  },
});


</script>

<template>
<div>
  <div class="container">
    <span class="body-text"> {{title}}</span>
    <input type="text" class="input input-text" :placeholder="'Enter ' + title"/>
  </div>
</div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}

.body-text{
  margin-bottom: 16px;
  color: #000;
}

.input{
  background: white;
  width: 240px;
  height: 22px;
  display: inline-flex;
  padding: 13px 0 13px 24px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid rgba(19, 19, 19, 0.25);
}
</style>