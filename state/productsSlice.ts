import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductService } from "../services/productService";
import {
  Product,
  ProductListState,
  ProductState,
  ProductUpdateFlagState,
} from "./types";

const productListInitialState: ProductListState = { data: [] };
const productInitialState: ProductState = {};
const productUpdateFlagInitialState: ProductUpdateFlagState = {
  isUpdate: false,
};

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const productService = new ProductService();
    const result = await productService.getAllProducts();
    return result?.data;
  }
);

export const getProduct = createAsyncThunk(
  "productSlice/getProduct",
  async (id: string) => {
    const productService = new ProductService();
    const result = await productService.getProduct(id);
    return result?.data;
  }
);

export const updateProduct = createAsyncThunk(
  "productSlice/updateProduct",
  async (product: Product) => {
    const productService = new ProductService();
    const result = await productService.updateProduct(product.id, product);
    return result?.data;
  }
);

export const addProduct = createAsyncThunk(
  "productSlice/addProduct",
  async (product: Product) => {
    const productService = new ProductService();
    const result = await productService.addProduct(product);
    return result?.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: productListInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const setProductUpdateFlag = createSlice({
  name: "productUpdateFlag",
  initialState: productUpdateFlagInitialState,
  reducers: {
    setProductUpdateFlag: (state: any) => {
      state.productUpdateFlag = state;
    },
  },
});

export const productSlice = createSlice({
  name: "getProduct",
  initialState: productInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export const updateProductSlice = createSlice({
  name: "updateProduct",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      // state.updateProduct = action.payload;
    });
  },
});

export const addProductSlice = createSlice({
  name: "addProduct",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addProduct.fulfilled, (state, action) => {
      // state.updateProduct = action.payload;
    });
  },
});
