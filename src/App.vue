<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import axios from 'axios';
import { onMounted } from 'vue';

onMounted(async () => {
  try {
    // const response = await axios.get();
    console.log(response);
  } catch (error) {
    console.error('Error fetching products', error);
  } finally {
    // state.isLoading = false;
  }
});
</script>

<template>
  <h1>Vue works</h1>
</template>

<style scoped>
</style>
