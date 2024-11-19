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
  <button
    v-if="!product.count"
    class="bg-green-700 hover:bg-green-900 text-white h-12 px-7 rounded-md text-center mx-auto mt-auto"
    @click="addProduct(product.id)"
  >
    Add to cart
  </button>

  <div
    v-else
    class="flex items-center justify-between border border-green-700 text-xl rounded-md w-36 h-12"
  >
    <button @click="deleteProduct(product.id)" class="h-full py-1 px-2">-</button>
    <span class="mx-2.5">{{ product.count || 0 }}</span>
    <button @click="addProduct(product.id)" class="h-full py-1 px-2">+</button>
  </div>
</template>
