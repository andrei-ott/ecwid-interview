<script setup lang="ts">
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { useCategoriesStore } from '@/store';
import { storeToRefs } from 'pinia';

const categoriesStore = useCategoriesStore();
const { categories, isLoading: isCategoriesLoading } = storeToRefs(categoriesStore);
</script>

<template>
  <div class="mb-10">
    <h1 class="text-3xl font-bold mb-4">Categories</h1>

    <PulseLoader v-if="isCategoriesLoading" :color="'green'" />

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
  </div>
</template>
