<script setup lang="ts">
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { useCategoriesStore, useProductsStore } from '@/store';
import { storeToRefs } from 'pinia';
import ProductCard from '@/components/ProductCard.vue';
import ProductsList from '@/components/ProductsList.vue';

const categoriesStore = useCategoriesStore();
const { categories, isLoading: isCategoriesLoading } = storeToRefs(categoriesStore);

const productsStore = useProductsStore();
const { products, isLoading: isProductsLoading } = storeToRefs(productsStore);
</script>

<template>
  <section class="mb-10">
    <h1 class="text-3xl font-bold mb-4">Categories</h1>

    <PulseLoader v-if="isCategoriesLoading" color="green" class="text-center" />

    <div v-else class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      <RouterLink
        v-for="category in categories"
        :key="category.id"
        :to="`/category/${category.id}`"
        class="bg-green-700 hover:bg-green-900 text-white font-bold py-4 px-4 rounded-md text-center"
      >
        {{ category.name }}
      </RouterLink>
    </div>
  </section>

  <section>
    <h1 class="text-3xl font-bold mb-4">All Products</h1>

    <PulseLoader v-if="isProductsLoading" color="green" class="text-center" />

    <ProductsList v-else :products="products" />
  </section>
</template>
