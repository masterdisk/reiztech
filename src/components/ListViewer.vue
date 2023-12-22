<script lang="ts" setup>
import {onMounted, ref} from "vue";
import Products from "../models/products";
import Product from "../models/product";
import api from "../plugins/api";
import FilterBar from "./FilterBar.vue";

const checkboxIcon = ref<string>('static/icons/listViewer/checkbox.svg');

let fetchedProducts = ref<Products | null>(null);

let defaultProducts = ref<Product[]>([]);

let isSortedAlphabetically = ref(false);
let sortedProducts = ref<Product[]>([]);

let isSortedByBrand = ref(false);
let sortedProductsByBrand = ref<Product[]>([]);

onMounted(async () => {
  await api.getProducts().then(data => {
    if (data !== null) {
      fetchedProducts.value = new Products(data.limit, data.products, data.skip, data.total);
      defaultProducts.value =[...data.products];
      sortedProducts.value = [...data.products];
      sortedProductsByBrand.value = [...data.products];
    }
  })
})

function getMoreDetails (product: Product) : void  {
  window.location.href = (`/moreDetails?productId=${product.id}`)
}

function toggleSortByTitle() {
  if (fetchedProducts.value) {
    if (isSortedAlphabetically.value) {
      // Revert to original order
      defaultProducts.value = [...fetchedProducts.value.products];
    } else {
      // Sort alphabetically
      defaultProducts.value = [...fetchedProducts.value.products].sort((a, b) => a.title.localeCompare(b.title));
    }
    // Toggle the sorting state
    isSortedAlphabetically.value = !isSortedAlphabetically.value;
    isSortedByBrand.value = false;
    toggleIconSortByTitle()
  }
}


function toggleSortByBrand() {
  if (fetchedProducts.value) {
    if (isSortedByBrand.value) {
      // Revert to original order
      defaultProducts.value = [...fetchedProducts.value.products];
    } else {
      // Sort by Brand
      defaultProducts.value = [...fetchedProducts.value.products].sort((a, b) => a.brand.localeCompare(b.brand));
    }
    // Toggle the sorting state
    isSortedByBrand.value = !isSortedByBrand.value;
    isSortedAlphabetically.value = false;
    toggleIconSortByBrand()
  }
}

async function getProductsByTitle(title: string) {
  await api.getProductsByTitle(title).then(data => {
    if (data !== null) {
      fetchedProducts.value = new Products(data.limit, data.products, data.skip, data.total);
      defaultProducts.value = [...data.products];
      sortedProducts.value = [...data.products];
      sortedProductsByBrand.value = [...data.products];
    }
  })
}

async function getProductsByBrand(brand: string) {
  await api.getProductsByBrand(brand).then(data => {
    if (data !== null) {
      fetchedProducts.value = new Products(data.limit, data.products, data.skip, data.total);
      defaultProducts.value = [...data.products];
      sortedProducts.value = [...data.products];
      sortedProductsByBrand.value = [...data.products];
    }
  })
}

function toggleIconSortByTitle() {
  const icon = document.getElementById("sortIconTitle");
  if (icon) {
    icon.textContent = icon.textContent === "↑" ? "↓" : "↑";
  }
}

function toggleIconSortByBrand() {
  const icon = document.getElementById("sortIconBrand");
  if (icon) {
    icon.textContent = icon.textContent === "↑" ? "↓" : "↑";
  }
}



</script>

<template>
  <div class="wrapper-top-bar">
  <div class="filters-container">
    <FilterBar @searchProducts="getProductsByTitle" title="Title" />
    <FilterBar @searchProducts="getProductsByBrand" title="Brand" />
  </div>
    <div class="filter-buttons-wrapper">
      <button id="sortButtonTitle" @click="toggleSortByTitle">
        Sort By Title<span id="sortIconTitle">↑</span>
      </button>
      <button id="sortButtonBrand" @click="toggleSortByBrand">
        Sort By Brand<span id="sortIconBrand">↑</span>
      </button>
    </div>
  </div>
  <div class="list-container">
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
    <div v-if="fetchedProducts !== null" class="table-row" v-for="product in defaultProducts" :key="product.id">
      <div class="icon-selector">
        <img :src="checkboxIcon" alt="" class="icon" /> <!-- Use img tag for SVG -->
      </div>
      <div  class="row-item list-item-body "><span @click="() => getMoreDetails(<Product>product)" class="clickable">{{ product.title }}</span></div>
      <div class="row-item list-item-body opacity-65">{{ product.category }}</div>
      <div class="row-item list-item-body opacity-65">{{ product.brand }}</div>
      <div class="row-item list-item-body opacity-65">{{ product.price }}</div>
      <div class="row-item list-item-body opacity-65">{{ product.stock }}</div>
      <div class="row-item list-item-body opacity-65">{{ product.rating }}</div>
    </div>
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
.header-item span{
  cursor: pointer;
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

#sortButtonTitle, #sortButtonBrand {
  background-color:#013CC6; /* Green background */
  border: none;
  color: white;
  padding: 10px 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
}

#sortIconBrand, #sortIconTitle{
  margin-left: 6px;
}

@media only screen and (max-width: 980px) {
  .filters-container{
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 22px;
    background: #F8F8F8;
    padding-bottom: 34px ;
  }

  .filter-buttons-wrapper{
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 22px;
    background: #F8F8F8;
    padding-bottom: 34px ;
  }

}

@media only screen and (min-width: 980px) {

  .wrapper-top-bar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 22px;
    background: #F8F8F8;
    padding-bottom: 34px ;
  }

  .filters-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 22px;
    background: #F8F8F8;
    padding-bottom: 34px ;
  }

}

</style>
