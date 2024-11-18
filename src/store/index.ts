import { getCategories, getProducts } from '@/api';
import type { Category, Product } from '@/types';
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

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [] as Product[],
    isLoading: true,
    isError: false,
  }),
  actions: {
    async setProducts() {
      this.isLoading = true;
      this.isError = true;

      try {
        this.products = await getProducts();
        this.isLoading = false;
      } catch {
        this.isLoading = false;
        this.isError = true;
      }
    },
    addProduct(productId: string) {
      this.products = this.products.map((product) =>
        product.id === productId
          ? {
              ...product,
              count: (product.count || 0) + 1,
            }
          : product,
      );
    },
    deleteProduct(productId: string) {
      this.products = this.products.map((product) =>
        product.id === productId
          ? {
              ...product,
              count: Math.max(0, (product.count || 0) - 1),
            }
          : product,
      );
    },
  },
});
