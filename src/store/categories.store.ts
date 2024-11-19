import { getCategories } from '@/api';
import { defineStore } from 'pinia';
import type { Category } from '@/types';

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: [] as Category[],
    isLoading: true,
    isError: false,
  }),
  actions: {
    async setCategories() {
      this.isLoading = true;
      this.isError = false;

      try {
        this.categories = await getCategories();
      } catch {
        this.isError = true;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
