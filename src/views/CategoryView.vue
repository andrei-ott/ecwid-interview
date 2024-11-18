<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const categoryId = route.params.categoryId;
</script>

<template>
  CATEGORY {{ categoryId }}
</template>
