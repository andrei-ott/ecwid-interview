export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  defaultDisplayedPriceFormatted: string;
  categoryIds: number[];
  description: string;

  count?: number;
}
