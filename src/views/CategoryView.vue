<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useCategoriesStore } from '@/store';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

const route = useRoute();
const categoryId = route.params.categoryId;

const categoriesStore = useCategoriesStore();
const { categories, isLoading: isCategoriesLoading } = storeToRefs(categoriesStore);
const category = computed(() => categories.value.find((item) => item.id.toString() === categoryId));
</script>

<template>
  <PulseLoader v-if="isCategoriesLoading" :color="'green'" />

  <h1 v-else class="text-3xl font-bold mb-4">{{ category?.name }}</h1>
</template>
