import axios from "axios";

export class ProductService {
  private macaquinhoApi = process.env.MACAQUINHO_API;

  getAllProducts = async () => {
    try {
      return axios.get(`${this.macaquinhoApi}/products`);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        throw new Error("Error when calling macaquinho API");
      }
    }
  };

  getProduct = async (id: string) => {
    try {
      return axios.get(`${this.macaquinhoApi}/products/${id}`);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        throw new Error("Error when calling macaquinho API");
      }
    }
  };

  updateProduct = async (id: string, data: any) => {
    try {
      console.log(data);
      return axios.patch(`${this.macaquinhoApi}/products/${id}`, data);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        throw new Error("Error when calling macaquinho API");
      }
    }
  };

  addProduct = async (data: any) => {
    try {
      return axios.post(`${this.macaquinhoApi}/products`, data);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        throw new Error("Error when calling macaquinho API");
      }
    }
  };

  getProductImageUrl = (filename: string) => {
    return `${this.macaquinhoApi}/products/image/${filename}`;
  };
}
