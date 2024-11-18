import type { Category, Product } from '@/types';

const STORE_ID = '108362264';
const TOKEN = 'public_RiNvjTVVzKLhFNWyzR5fNY68u1GMHLEs';

interface Content<T> {
  items: T[];
}

async function request<T>(endpoint: string): Promise<Content<T>> {
  const response = await fetch(`https://app.ecwid.com/api/v3/${STORE_ID}/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
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
