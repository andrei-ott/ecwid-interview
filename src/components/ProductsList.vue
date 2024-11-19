<script setup lang="ts">
import type { Product } from '@/types';
import ProductCard from '@/components/ProductCard.vue';

const { products } = defineProps({
  products: { type: Object as Product[], required: true },
});
</script>

<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 gap-y-12">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>
