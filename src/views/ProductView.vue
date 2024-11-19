<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useCategoriesStore, useProductsStore } from '@/store';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import AddToCartButton from '@/components/AddToCartButton.vue';
import Loader from '@/components/Loader.vue';

const route = useRoute();
const productId = route.params.productId;
const categoryId = route.query.categoryId;

const categoriesStore = useCategoriesStore();
const { categories, isLoading: isCategoriesLoading } = storeToRefs(categoriesStore);
const category = computed(() =>
  categories.value.find((category) => category.id.toString() === categoryId),
);

const productsStore = useProductsStore();
const { products, isLoading: isProductsLoading } = storeToRefs(productsStore);
const product = computed(() =>
  products.value.find((product) => product.id.toString() === productId),
);
</script>

<template>
  <Loader v-if="isProductsLoading || (categoryId && isCategoriesLoading)" />

  <section v-else>
    <div v-if="category" class="mb-4 text-gray-500">
      <i class="pi pi-arrow-left text-xs me-2"></i>
      <RouterLink :to="`/category/${categoryId}`">
        {{ category.name }}
      </RouterLink>
    </div>

    <div class="flex">
      <img class="w-1/2" :src="product.imageUrl" :alt="product.name" />

      <div class="w-full ps-8">
        <h1 class="text-3xl mb-6">{{ product.name }}</h1>

        <div class="text-2xl mb-3 font-semibold">{{ product.defaultDisplayedPriceFormatted }}</div>

        <AddToCartButton :product="product" class="mb-10" />

        <div v-html="product.description"></div>
      </div>
    </div>
  </section>
</template>
