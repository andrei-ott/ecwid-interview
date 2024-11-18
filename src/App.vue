<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <Navbar />

  <div class="max-w-6xl mx-auto px-4 py-8">
    <RouterView />
  </div>
</template>

<style scoped>
</style>
