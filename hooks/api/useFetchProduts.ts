"use client";
import axios from "axios";
import { fetchData, product } from "../../components/redux/productsSlice";
import { useQuery } from "@tanstack/react-query";
import { AppDispatch } from "@/components/redux/store";
import { useDispatch } from "react-redux";

const fetchPosts = async (): Promise<product[]> => {
  const response = await axios.get("https://dummyjson.com/products");
  return response.data;
};

export const UseFetchProducts = () => {
  const dispatch: AppDispatch = useDispatch();

  const { data, error, isLoading, isSuccess } = useQuery<product[], Error>({
    queryKey: ["products"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return;
  }

  if (error) {
    throw error;
  }

  if (data && isSuccess) {
    dispatch(fetchData(data));
    console.log("update success");
  }
};
