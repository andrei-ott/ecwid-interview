<script setup lang="ts">
</script>

<template>
  <nav class="bg-green-700">
    <div class="flex items-center h-20 max-w-4xl mx-auto px-6">
      <div
        class="flex flex-1 items-center justify-between"
      >
        <RouterLink
          to="/"
          class="text-white px-3 py-2 rounded-md hover:bg-green-900 hover:text-white"
          activeClass="bg-green-900"
        >
          Home
        </RouterLink>

        <RouterLink
          to="/cart"
          class="text-white px-3 py-2 rounded-md hover:bg-green-900 hover:text-white"
          activeClass="bg-green-900"
        >
          <i class="pi pi-shopping-cart"></i>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
