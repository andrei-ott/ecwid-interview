<script setup lang="ts">
import { useCategoriesStore, useProductsStore } from '@/store';
import { storeToRefs } from 'pinia';
import ProductsList from '@/components/ProductsList.vue';
import Loader from '@/components/Loader.vue';
import ErrorWarning from '@/components/ErrorWarning.vue';

const categoriesStore = useCategoriesStore();
const {
  categories,
  isLoading: isCategoriesLoading,
  isError: isCategoriesError,
} = storeToRefs(categoriesStore);

const productsStore = useProductsStore();
const {
  products,
  isLoading: isProductsLoading,
  isError: isProductsError,
} = storeToRefs(productsStore);
</script>

<template>
  <ErrorWarning v-if="isCategoriesError || isProductsError" />

  <template v-else>
    <section class="mb-10">
      <h1 class="text-3xl font-bold mb-4">Categories</h1>

      <Loader v-if="isCategoriesLoading" />

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

      <Loader v-if="isProductsLoading" />

      <ProductsList v-else :products="products" />
    </section>
  </template>
</template>
