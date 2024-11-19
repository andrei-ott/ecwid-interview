<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useCategoriesStore, useProductsStore } from '@/store';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import ProductsList from '@/components/ProductsList.vue';
import Loader from '@/components/Loader.vue';

const route = useRoute();
const categoryId = route.params.categoryId;

const categoriesStore = useCategoriesStore();
const { categories, isLoading: isCategoriesLoading } = storeToRefs(categoriesStore);
const category = computed(() => categories.value.find((item) => item.id.toString() === categoryId));

const productsStore = useProductsStore();
const { products, isLoading: isProductsLoading } = storeToRefs(productsStore);
const filteredProducts = computed(() => products.value.filter(product => product.categoryIds.includes(parseInt(categoryId))));
</script>

<template>
  <Loader v-if="isCategoriesLoading || isProductsLoading" />

  <section v-else>
    <h1 class="text-3xl font-bold mb-4">{{ category?.name }}</h1>

    <ProductsList :products="filteredProducts" />
  </section>
</template>
