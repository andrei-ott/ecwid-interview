import type { Category, Product } from '@/types';

interface Content<T> {
  items: T[];
}

async function request<T>(endpoint: string): Promise<Content<T>> {
  const response = await fetch(`https://app.ecwid.com/api/v3/${import.meta.env.VITE_STORE_ID}/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
    },
  });
  return response.json();
}

export async function getCategories(): Promise<Category[]> {
  const content = await request<Category>('categories');
  return content.items;
}

export async function getProducts(): Promise<Product[]> {
  const content = await request<Product>('products');
  return content.items;
}
