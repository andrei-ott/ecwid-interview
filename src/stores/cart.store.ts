import { defineStore } from 'pinia';
import type { CartItem } from '@/types';

const CART_STORAGE_KEY = 'cart';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),
  getters: {
    totalCount(): number {
      return this.items.reduce((acc, item) => acc + item.count, 0);
    }
  },
  actions: {
    setItemsFromStorage() {
      const storage = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '');
      if (Array.isArray(storage)) {
        this.items = storage;
      }
    },
    setItemsToStorage() {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items));
    },
    updateItem(productId: string, count: number) {
      if (count === 0) {
        this.items = this.items.filter((item) => item.productId !== productId);
      } else {
        let foundItem = false;
        this.items = this.items.map((item) => {
          if (item.productId === productId) {
            foundItem = true;
            return {
              ...item,
              count
            };
          }
          return item;
        });

        if (!foundItem) {
          this.items = this.items.concat([{ productId, count }]);
        }
      }

      this.setItemsToStorage();
    },
  },
});
