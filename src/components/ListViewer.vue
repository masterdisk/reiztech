<script lang="ts" setup>
import {onMounted, ref} from "vue";
import Products from "../models/products";
import Product from "../models/product";
import api from "../plugins/api";

const emit = defineEmits(['changeRoute'])


const checkboxIcon = ref<string>('static/icons/listViewer/checkbox.svg');

let fetchedProducts = ref<Products | null>(null);

onMounted(async () => {
  await api.getProducts().then(data => {
    if (data !== null) {
      fetchedProducts.value = new Products(data.limit, data.products, data.skip, data.total);
    }
  })
})

function getMoreDetails (product: Product) : void  {
  window.location.href = (`/moreDetails?productId=${product.id}`)
}


</script>

<template>
  <div class="product-table">
    <div class="table-header fixed-content">
      <div class="icon-selector">
      <img :src="checkboxIcon" alt="" class="icon" /> <!-- Use img tag for SVG -->
      </div>
      <div class="header-item list-item-title">Title</div>
      <div class="header-item list-item-title">Category</div>
      <div class="header-item list-item-title">Brand</div>
      <div class="header-item list-item-title">Price</div>
      <div class="header-item list-item-title">Stock</div>
      <div class="header-item list-item-title">Rating</div>
    </div>
    <div v-if="fetchedProducts !== null" class="table-row" v-for="product in fetchedProducts.products" :key="product.id">
      <div class="icon-selector">
        <img :src="checkboxIcon" alt="" class="icon" /> <!-- Use img tag for SVG -->
      </div>
      <div @click="getMoreDetails(<Product>product)" class="row-item list-item-body "><span class="clickable">{{ product.title }}</span></div>
      <div class="row-item list-item-body opacity-65">{{ product.category }}</div>
      <div class="row-item list-item-body opacity-65">{{ product.brand }}</div>
      <div class="row-item list-item-body opacity-65">{{ product.price }}</div>
      <div class="row-item list-item-body opacity-65">{{ product.stock }}</div>
      <div class="row-item list-item-body opacity-65">{{ product.rating }}</div>
    </div>
  </div>
</template>

<style scoped>
.product-table {
  display: grid;
  grid-template-columns: repeat(7, auto); /* 7 columns, each with auto width */
  text-align: start;
}
.icon-selector{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}

.table-header {
  background-color: #f3f3f3;
  display: contents;
  text-align: start;
  color: #000;
}

.icon{
  padding: 24px;
  width: 24px;
  height: 24px;
}

.header-item{
  padding: 24px 24px 29px 0;
  border-bottom: 1px solid #F2F2F2;
  display: flex;
justify-content: start;
}
.row-item {
  color: #000;
  padding: 30px 24px 24px 0;
  border-bottom: 1px solid #F2F2F2;
}

.table-row {
  display: contents;
}

.row-item {
  background-color: #fff;
  text-align: start;
}

.clickable{
  cursor: pointer;
  color: rgba(11, 99, 248, 1);
}

</style>
