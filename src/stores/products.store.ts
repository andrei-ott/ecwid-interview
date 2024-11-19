import { defineStore } from 'pinia';
import type { Product } from '@/types';
import { getProducts } from '@/api';
import { useCartStore } from '@/stores/cart.store';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [] as Product[],
    isLoading: true,
    isError: false,
  }),
  getters: {
    cartTotalPriceFormatted(): number {
      const totalPrice = this.products.reduce(
        (acc, product) => acc + product.defaultDisplayedPrice * (product.count || 0),
        0,
      ).toFixed(2);
      const currencySymbol = this.products[0]?.defaultDisplayedPriceFormatted.split(' ')[0];

      return currencySymbol + ' ' + totalPrice;
    },
  },
  actions: {
    async setProducts() {
      this.isLoading = true;
      this.isError = false;
      const cartStore = useCartStore();

      try {
        this.products = await getProducts();

        this.products = this.products.map((product) => {
          const foundCartItem = cartStore.items.find((item) => item.productId === product.id);
          if (foundCartItem) {
            return {
              ...product,
              count: foundCartItem.count,
            };
          }

          return {
            ...product,
            count: 0,
          };
        });
      } catch {
        this.isError = true;
      } finally {
        this.isLoading = false;
      }
    },
    addProductToCart(productId: string) {
      const cartStore = useCartStore();

      this.products = this.products.map((product) => {
        if (product.id === productId) {
          const newCount = (product.count || 0) + 1;
          cartStore.updateItem(product.id, newCount);

          return {
            ...product,
            count: newCount,
          };
        }
        return product;
      });
    },
    removeProductFromCart(productId: string, fully = false) {
      const cartStore = useCartStore();

      this.products = this.products.map((product) => {
        if (product.id === productId) {
          const newCount = fully ? 0 : Math.max(0, (product.count || 0) - 1);
          cartStore.updateItem(product.id, newCount);

          return {
            ...product,
            count: newCount,
          };
        }
        return product;
      });
    },
    removeAllProductsFromCart() {
      const cartStore = useCartStore();

      this.products = this.products.map((product) => {
        cartStore.updateItem(product.id, 0);

        return {
          ...product,
          count: 0,
        };
      });
    },
  },
});
