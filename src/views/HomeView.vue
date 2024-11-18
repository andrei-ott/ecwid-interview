<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { getCategories } from '@/api/requests';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

const state = reactive({
  categories: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    state.categories = await getCategories();
    state.isLoading = false;
  } catch (error) {
    console.error('Error fetching categories', error);
  }
});
</script>

<template>
  <div class="mb-10">
    <h1 class="text-3xl font-bold mb-4">Categories</h1>

    <PulseLoader v-if="state.isLoading" :color="'green'" />

    <div v-else class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      <RouterLink
        :to="`/category/${category.id}`"
        v-for="category in state.categories"
        :key="category.id"
        class="bg-green-700 hover:bg-green-900 text-white font-bold py-4 px-4 rounded-md text-center"
      >
        {{ category.name }}
      </RouterLink>
    </div>
  </div>
</template>
