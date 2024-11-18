<script setup lang="ts">
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { useCategoriesStore, useProductsStore } from '@/store';
import { storeToRefs } from 'pinia';

const categoriesStore = useCategoriesStore();
const { categories, isLoading: isCategoriesLoading } = storeToRefs(categoriesStore);

const productsStore = useProductsStore();
const { products, isLoading: isProductsLoading } = storeToRefs(productsStore);
const { addProduct, deleteProduct } = productsStore;
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

    <div v-else class="grid grid-cols-2 sm:grid-cols-3 gap-6 gap-y-12">
      <div v-for="product in products" :key="product.id" class="flex flex-col justify-between">
        <RouterLink
          :to="`/category/${product.id}`"
          class="flex flex-col align-center text-gray-800"
        >
          <img :src="product.imageUrl" :alt="product.name" />

          <h2 class="mx-2 mt-1 text-center text-lg">{{ product.name }}</h2>
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
    </div>
  </section>
</template>
