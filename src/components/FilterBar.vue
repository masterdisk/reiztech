<script setup lang="ts">
import {ref, watch} from "vue";

const emit = defineEmits(['searchProducts'])

const {title} = defineProps({
  title: {
    type: String,
    required: true
  }
});


let text = ref<string>('');

// Debounce function with type assertion for the timer
function debounce<T extends (...args: any[]) => void>(func: T, delay: number): (...args: Parameters<T>) => void {
  let debounceTimer: any;
  return function(...args: Parameters<T>) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      func(...args); // Call func directly without using 'this'
    }, delay);
  };
}

// Debounced search function
const debouncedSearch = debounce(() => {
  emit('searchProducts', text.value);
}, 1500);

watch(text, (newValue, oldValue) => {
  console.log('old value: '+oldValue)
  console.log('new value: '+newValue)
  debouncedSearch();
})


</script>

<template>
<div>
  <div class="container">
    <span class="body-text"> {{title}}</span>
    <input v-model="text" type="text" class="input input-text" :placeholder="'Enter ' + title"/>
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