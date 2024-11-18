<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import axios from 'axios';
import { onMounted } from 'vue';
import Navbar from '@/components/Navbar.vue';

onMounted(async () => {
  try {
    const response = await fetch('https://app.ecwid.com/api/v3/108362264/categories', {
      headers: {
        Authorization: 'Bearer public_RiNvjTVVzKLhFNWyzR5fNY68u1GMHLEs'
      }
    });
    console.log(response);
  } catch (error) {
    console.error('Error fetching products', error);
  } finally {
    // state.isLoading = false;
  }
});
</script>

<template>
  <Navbar />

  <RouterView />
</template>

<style scoped>
</style>
