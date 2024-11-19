<script setup lang="ts">
import type { Product } from '@/types';
import { useProductsStore } from '@/stores';
import type { PropType } from 'vue';

const { product } = defineProps({
  product: { type: Object as PropType<Product>, required: true },
});

const productsStore = useProductsStore();
const { addProductToCart, removeProductFromCart } = productsStore;
</script>

<template>
  <button
    v-if="!product.count"
    class="bg-green-700 hover:bg-green-900 text-white h-12 px-7 rounded-md text-center mx-auto mt-auto"
    @click="addProductToCart(product.id)"
  >
    Add to cart
  </button>

  <div
    v-else
    class="flex items-center justify-between border border-green-700 text-xl rounded-md w-36 h-12"
  >
    <button @click="removeProductFromCart(product.id)" class="h-full py-1 ps-4 pe-2">
      <i class="pi pi-minus text-xs"></i>
    </button>

    <span class="mx-2.5">{{ product.count || 0 }}</span>

    <button @click="addProductToCart(product.id)" class="h-full py-1 ps-2 px-4">
      <i class="pi pi-plus text-sm"></i>
    </button>
  </div>
</template>
