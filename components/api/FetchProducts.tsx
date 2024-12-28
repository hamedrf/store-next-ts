"use client";
import { fetchData, product } from "@/hook/redux/productsSlice";
import { AppDispatch } from "@/hook/redux/store";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const FetchProducts = () => {
  // Function to fetch products from the API
  const fetchProducts = async (): Promise<product[]> => {
    const response = await axios.get("https://kharidpardeh.ir/api/products");
    return response.data.products[0].data;
  };

  const dispatch: AppDispatch = useDispatch();
  // React Query hook to fetch products
  const { data } = useQuery<product[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  useEffect(() => {
    if (data && Array.isArray(data)) dispatch(fetchData(data));
  }, [dispatch, data]);

  return <></>;
};

export default FetchProducts;
