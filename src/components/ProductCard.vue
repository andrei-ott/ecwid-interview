<script setup lang="ts">
import type { Product } from '@/types';
import { useProductsStore } from '@/store';

const { product } = defineProps({
  product: { type: Object as Product, required: true },
});

const productsStore = useProductsStore();
const { addProduct, deleteProduct } = productsStore;
</script>

<template>
  <div class="flex flex-col justify-between">
    <RouterLink
      :to="`/category/${product.id}`"
      class="flex flex-col align-center text-gray-800 product-card hover:text-green-700"
    >
      <div class="img-wrap">
        <img :src="product.imageUrl" :alt="product.name" />
      </div>

      <h2 class="px-2 pt-1 text-center text-lg bg-white z-10">{{ product.name }}</h2>
      <p class="text-lg text-center mb-2">{{ product.defaultDisplayedPriceFormatted }}</p>
    </RouterLink>

    <div class="flex justify-center">
      <button
        v-if="!product.count"
        class="bg-green-700 hover:bg-green-900 text-white py-2 px-7 rounded-md text-center mx-auto mt-auto"
        @click="addProduct(product.id)"
      >
        Add to cart
      </button>

      <div
        v-else
        class="flex items-center justify-between border border-green-700 text-xl rounded-md w-36 mx-auto"
      >
        <button @click="deleteProduct(product.id)" class="h-full py-1 px-2">-</button>
        <span class="mx-2.5">{{ product.count || 0 }}</span>
        <button @click="addProduct(product.id)" class="h-full py-1 px-2">+</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  overflow: hidden;
}

.product-card img {
  transition: transform 0.2s;
}

.product-card:hover img {
  transform: scale(1.1);
}
</style>
