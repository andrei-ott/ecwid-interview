<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import { useCartStore, useCategoriesStore, useProductsStore } from '@/stores';

const cartStore = useCartStore();
cartStore.setItemsFromStorage();

const categoriesStore = useCategoriesStore();
categoriesStore.setCategories();

const productsStore = useProductsStore();
productsStore.setProducts();
</script>

<template>
  <Navbar />

  <div class="max-w-6xl mx-auto px-4 py-8">
    <RouterView />
  </div>
</template>
