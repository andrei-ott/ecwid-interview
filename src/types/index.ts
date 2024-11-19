export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  defaultDisplayedPrice: number;
  defaultDisplayedPriceFormatted: string;
  categoryIds: number[];
  description: string;

  count?: number;
}

export interface CartItem {
  productId: string;
  count: number;
}
