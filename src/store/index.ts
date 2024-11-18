import { getCategories } from '@/api/requests';
import type { Category } from '@/types/category';
import { defineStore } from 'pinia';

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: [] as Category[],
    isLoading: true,
    isError: false,
  }),
  actions: {
    async setCategories() {
      this.isLoading = true;
      this.isError = true;

      try {
        this.categories = await getCategories();
        this.isLoading = false;
      } catch {
        this.isLoading = false;
        this.isError = true;
      }
    },
  },
});
