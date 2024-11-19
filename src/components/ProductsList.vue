<script setup lang="ts">
import type { Product } from '@/types';
import ProductCard from '@/components/ProductCard.vue';
import type { PropType } from 'vue';

const { products } = defineProps({
  products: { type: Object as PropType<Product[]>, required: true },
});
</script>

<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 gap-y-12">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>
