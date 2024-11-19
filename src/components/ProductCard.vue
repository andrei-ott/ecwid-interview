<script setup lang="ts">
import type { Product } from '@/types';
import { useRoute } from 'vue-router';
import AddToCartButton from '@/components/AddToCartButton.vue';

const route = useRoute();
const categoryId = route.params.categoryId;

const { product } = defineProps({
  product: { type: Object as Product, required: true },
});
</script>

<template>
  <div class="flex flex-col justify-between">
    <RouterLink
      :to="{ path: `/product/${product.id}`, query: { categoryId } }"
      class="flex flex-col align-center text-gray-800 product-card hover:text-green-700"
    >
      <div class="img-wrap">
        <img :src="product.imageUrl" :alt="product.name" />
      </div>

      <h2 class="px-2 pt-1 text-center text-lg bg-white z-10">{{ product.name }}</h2>
      <p class="text-lg text-center mb-2 font-semibold mt-2">{{ product.defaultDisplayedPriceFormatted }}</p>
    </RouterLink>

    <div class="flex justify-center">
      <AddToCartButton :product="product" />
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
