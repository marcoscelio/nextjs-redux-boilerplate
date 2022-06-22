export interface Product {
  id: string;
  isActive: boolean;
  isArchived: boolean;
  createAt: Date;
  updatedAt: Date;
  name: string;
  description: string;
  expirationDate: Date;
  measure: string;
  defaultMeasureValue: number;
  measureUnit: string;
  onSale: boolean;
  onSalePrice: number;
  clientAmountLimit: number;
  options: any;
  inventory: number;
  imageUrl: string;
  price: number;
}

export interface ProductListState {
  data: Product[];
}

export interface ProductUpdateFlagState {
  isUpdate: boolean;
}

export interface ProductState {
  product?: Product;
}
