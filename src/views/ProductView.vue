<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useCategoriesStore, useProductsStore } from '@/stores';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import AddToCartButton from '@/components/AddToCartButton.vue';
import Loader from '@/components/Loader.vue';
import ErrorWarning from '@/components/ErrorWarning.vue';

const route = useRoute();
const productId = route.params.productId;
const categoryId = route.query.categoryId;

const categoriesStore = useCategoriesStore();
const {
  categories,
  isLoading: isCategoriesLoading
} = storeToRefs(categoriesStore);
const category = computed(() =>
  categories.value.find((category) => category.id.toString() === categoryId),
);

const productsStore = useProductsStore();
const {
  products,
  isLoading: isProductsLoading,
  isError: isProductsError,
} = storeToRefs(productsStore);
const product = computed(() =>
  products.value.find((product) => product.id.toString() === productId),
);
</script>

<template>
  <ErrorWarning v-if="isProductsError" />

  <template v-else>
    <Loader v-if="isProductsLoading || (categoryId && isCategoriesLoading)" />

    <section v-else>
      <ErrorWarning v-if="!product" />

      <template v-else>
        <div v-if="category" class="mb-4 text-gray-500">
          <i class="pi pi-arrow-left text-xs me-2"></i>
          <RouterLink :to="`/category/${categoryId}`">
            {{ category.name }}
          </RouterLink>
        </div>

        <div class="flex flex-col md:flex-row gap-8">
          <img class="w-full md:w-1/2 object-cover" :src="product.imageUrl" :alt="product.name" />

          <div class="w-full">
            <h1 class="text-3xl mb-6">{{ product.name }}</h1>

            <div class="text-2xl mb-3 font-semibold">
              {{ product.defaultDisplayedPriceFormatted }}
            </div>

            <AddToCartButton :product="product" class="mb-10" />

            <div v-html="product.description"></div>
          </div>
        </div>
      </template>
    </section>
  </template>
</template>
