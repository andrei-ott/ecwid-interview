<script setup lang="ts">
import { useCartStore } from '@/stores';

const cartStore = useCartStore();
</script>

<template>
  <nav class="bg-green-700">
    <div class="flex items-center h-20 max-w-4xl mx-auto px-6">
      <div class="flex flex-1 items-center justify-between">
        <RouterLink
          to="/"
          class="text-white px-3 py-2 rounded-md hover:bg-green-900"
          activeClass="bg-green-900"
        >
          Home
        </RouterLink>

        <RouterLink
          to="/cart"
          class="text-white px-3 py-2 rounded-md hover:bg-green-900 flex align-center relative"
          activeClass="bg-green-900"
        >
          <i class="pi pi-shopping-cart text-3xl"></i>

          <div
            v-if="cartStore.totalCount"
            class="absolute bottom-1 right-1 flex bg-green-900 rounded-full w-6 h-6 border border-white"
          >
            <span class="text-sm m-auto">{{ cartStore.totalCount }}</span>
          </div>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
