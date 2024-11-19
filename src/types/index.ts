export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  defaultDisplayedPriceFormatted: string;
  count?: number;
  categoryIds: number[];
}
