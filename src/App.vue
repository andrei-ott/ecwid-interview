<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import { useCategoriesStore } from '@/store';

const categoriesStore = useCategoriesStore();
categoriesStore.setCategories();
</script>

<template>
  <Navbar />

  <div class="max-w-6xl mx-auto px-4 py-8">
    <RouterView />
  </div>
</template>

<style scoped>
</style>
