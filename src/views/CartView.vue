<script setup lang="ts">
import { useCartStore, useProductsStore } from '@/store';
import { storeToRefs } from 'pinia';
import Loader from '@/components/Loader.vue';
import { computed } from 'vue';
import AddToCartButton from '@/components/AddToCartButton.vue';
import { useToast } from 'vue-toastification';
import ErrorWarning from '@/components/ErrorWarning.vue';

const cartStore = useCartStore();
const { items } = storeToRefs(cartStore);

const productsStore = useProductsStore();
const { products, isLoading, isError } = storeToRefs(productsStore);
const { removeProductFromCart, removeAllProductsFromCart } = productsStore;

const cartProducts = computed(() =>
  items.value
    .map((item) => products.value.find((product) => product.id === item.productId))
    .filter((item) => !!item),
);

const toast = useToast();

function onPlaceOrder() {
  toast.success('Order completed!', {
    timeout: 4000,
  });
  removeAllProductsFromCart();
}
</script>

<template>
  <ErrorWarning v-if="isError" />

  <template v-else>
    <Loader v-if="isLoading" />

    <template v-else>
      <div v-if="cartProducts.length === 0" class="text-center text-3xl font-bold">
        Shopping cart is empty
      </div>

      <div v-else class="flex justify-between gap-10">
        <section class="w-full">
          <div
            v-for="product in cartProducts"
            :key="product.id"
            class="flex align-center border border-gray-300 rounded-md mb-4 pe-8"
          >
            <img :src="product.imageUrl" :alt="product.name" class="w-28 me-5 rounded-l-md" />

            <div class="py-5 flex flex-col justify-between">
              <span class="text-xl">{{ product.name }}</span>

              <span class="text-lg font-semibold">{{ product.defaultDisplayedPriceFormatted }}</span>

              <AddToCartButton :product="product" />
            </div>

            <button class="ms-auto" @click="removeProductFromCart(product.id, true)">
              <i class="pi pi-trash text-2xl hover:text-red-500"></i>
            </button>
          </div>
        </section>

        <section class="py-3 px-6 rounded-md border border-gray-300 h-min">
          <h1 class="text-3xl font-semibold mb-2">Total</h1>

          <div class="text-xl mb-4 font-semibold">{{ productsStore.cartTotalPriceFormatted }}</div>

          <button
            class="bg-green-700 hover:bg-green-900 text-white font-bold w-52 h-14 rounded-md text-lg"
            @click="onPlaceOrder()"
          >
            Place Order
          </button>
        </section>
      </div>
    </template>
  </template>
</template>
