import axios from "axios";
import { useQuery } from "react-query";

export const useProducts = (category?: String) =>
  useQuery(
    category ? `products/${category}` : "products",
    async () => {
      const { data } = await axios.get(
        category
          ? `https://fakestoreapi.com/products/category/${category}`
          : "https://fakestoreapi.com/products"
      );

      const products: Product[] = data.map((product: any) => ({
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.image,
        category: product.category,
        description: product.description,
        tags: [],
        images: [],
        videos: [],
        options: {},
        stock: 3,
      }));
      return products || [];
    },
    {
      refetchOnWindowFocus: false,
      refetchInterval: 0,
    }
  );

export const useProduct = (id: number) =>
  useQuery(
    "productData",
    async () => {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      const product: Product = {
        id: data.id,
        name: data.title,
        price: data.price,
        image: data.image,
        category: data.category,
        description: data.description,
        tags: [],
        images: [],
        videos: [],
        options: {},
        stock: 3,
      };
      return product || null;
    },
    {
      enabled: typeof id === "number",
      refetchOnWindowFocus: false,
      refetchInterval: 0,
    }
  );
