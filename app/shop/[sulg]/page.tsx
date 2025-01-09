"use client";
import Comments from "@/components/shop/Comments";
import MainBtn from "@/components/UI/MainBtn";
import { addCart, product } from "@/hook/redux/productsSlice";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Product = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const sulg = decodeURIComponent(param.sulg as string);

  const fetchProduct = async (): Promise<product> => {
    const response = await axios.get(
      `https://kharidpardeh.ir/api/products/${sulg}`
    );
    return response.data.data.product;
  };
  const { data, refetch } = useQuery<product, Error>({
    queryKey: ["product"],
    queryFn: fetchProduct,
  });
  useEffect(() => {
    refetch();
  }, [sulg, refetch, data]);
  return (
    <>
      <div className="2xl:container  mx-auto  grid grid-cols-12 border-x px-3">
        <div className="col-span-12 lg:col-span-6">
          <div className="w-full h-full">
            <Image
              src="/img.jpg"
              alt="img"
              height={11111}
              width={11111}
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 flex justify-evenly flex-col px-9">
          <h1 className="text-4xl mb-6">{data?.name}</h1>
          <p className="px-3 text-xl">{data?.description}</p>
          <div className="text-xl"> موجودی : {data?.quantity}</div>
          <div className="text-xl">اخرین بروزرسانی : {data?.updated_at}</div>
          <div className="flex justify-between">
            <span className="text-2xl text-green-400">
              {" "}
              {data?.price}
              <span className="text-black">تومان</span>
            </span>
            <MainBtn
              text="خرید"
              color="second"
              eventClick={() => {
                dispatch(addCart(data!));
              }}
            />
          </div>
        </div>
      </div>
      <div className="my-8 2xl:container m-auto">
        <Comments comment={data?.comments.data} productId={data?.id} />
      </div>
    </>
  );
};

export default Product;
