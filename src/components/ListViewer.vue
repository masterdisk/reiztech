<script lang="ts" setup>
import {ref} from "vue";

interface Product {
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  discountPercentage: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
}

interface FetchedData {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}

const fetchedProducts = ref<FetchedData | null>(null);
const products = ref<Product[]>([]);

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data: FetchedData) => {
      fetchedProducts.value = data;
      products.value = data.products;
    })
    .catch(error => {
      console.error("Failed to fetch products:", error);
    });

const checkboxIcon = ref<string>('static/icons/listViewer/checkbox.svg');


</script>

<template>
  <div class="product-table">
    <div class="table-header">
      <img :src="checkboxIcon" alt="" class="icon" /> <!-- Use img tag for SVG -->
      <div class="header-item list-item-title">Title</div>
      <div class="header-item list-item-title">Category</div>
      <div class="header-item list-item-title">Brand</div>
      <div class="header-item list-item-title">Price</div>
      <div class="header-item list-item-title">Stock</div>
      <div class="header-item list-item-title">Rating</div>
    </div>
    <div class="table-row" v-for="product in products" :key="product.id">
      <img :src="checkboxIcon" alt="" class="icon" /> <!-- Use img tag for SVG -->
      <div class="row-item list-item-body">{{ product.title }}</div>
      <div class="row-item list-item-body">{{ product.category }}</div>
      <div class="row-item list-item-body">{{ product.brand }}</div>
      <div class="row-item list-item-body">{{ product.price }}</div>
      <div class="row-item list-item-body">{{ product.stock }}</div>
      <div class="row-item list-item-body">{{ product.rating }}</div>
    </div>
  </div>
</template>

<style scoped>
.product-table {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: start;
}

.table-header {
  background-color: #f3f3f3;
  display: contents;
  text-align: start;
}

.icon{
  padding: 24px;
  width: 24px;
  height: 24px;
}

.header-item{
  padding: 24px 24px 24px 24px;
  border-bottom: 1px solid #F2F2F2;

}
.row-item {
  padding: 30px 0 24px 24px;
  border-bottom: 1px solid #F2F2F2;
}

.table-row {
  display: contents;
}

.row-item {
  background-color: #fff;
  text-align: start;
}

</style>
