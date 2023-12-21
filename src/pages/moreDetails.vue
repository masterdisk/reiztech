<script setup lang="ts">
import {onMounted, ref} from "vue";
import api from "../plugins/api";
import Product from "../models/product";

let productData = ref<Product | null>(null);
let productId : string | null = null;

const leftArrowIcon = ref<string>('static/icons/navigation/arrowLeft.svg');


if(new URLSearchParams(window.location.search).has('productId')) {
 productId = new URLSearchParams(window.location.search).get('productId');
}

onMounted(async () => {
  if(productId !== null) {
  await api.getProductById(productId).then(data => {
    if (data !== null) {
    productData.value = new Product(
        data.id,
        data.title,
        data.description,
        data.brand,
        data.category,
        data.discountPercentage,
        data.images,
        data.price,
        data.rating,
        data.stock,
        data.thumbnail
    );}
  })}

})

function goHome () : void  {
  window.location.href = (`/`)
}
</script>

<template>
  <div class="container">
    <div class="top-text">
      <img :src="leftArrowIcon" alt="" @click="goHome" class="icon"/>
      <span class="title"> Products Information</span>
    </div>
    <div class="list-container">
      <div v-if="productId" class="product-data">
        <div class="product-image">
          <img :src="productData?.thumbnail" alt="product image">
        </div>
        <div class="product-info">
          <div v-for="(value, propertyName) in productData">
            <span class="body-text">{{ propertyName }}:</span>
            <span class="value-text"> {{ value }} </span>
          </div>

        </div>
      </div>
      <div v-else>
        Product Not Found
      </div>
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

.list-container {
  padding: 0 2.5em 1.875em 2.5625em;
  width: calc(100% + 1px);
  margin-top: 34px;
  max-height: 750px;
  overflow-y: scroll;
  background: white;
}

.value-text{
  font-weight: bold;
  margin-left: 10px;
}

.icon{
  padding-right: 24px;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.top-text{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 34px;
  margin-bottom: 34px;
}
</style>