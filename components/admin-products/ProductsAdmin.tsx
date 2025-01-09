"use client";
import { RootState } from "@/hook/redux/store";
import FetchProducts from "../api/FetchProducts";
import { useSelector } from "react-redux";
import Image from "next/image";
import MainBtn from "../UI/MainBtn";
import { useEffect } from "react";

const ProductsAdmin = () => {
  const produts = useSelector((state: RootState) => state.productsSlice);

  useEffect(() => {
    console.log(produts);
  });
  return (
    <div>
      <FetchProducts />
      <div>
        {produts.all.map((e) => {
          return (
            <div
              key={e.id}
              className="flex justify-between  border-3 rounded-2xl my-10 !mx-5 hover:!border-4 hover:border-gray-300"
            >
              <div className="flex gap-5">
                {" "}
                <div className="h-30">
                  <Image
                    src="/img.jpg"
                    alt="img"
                    height={11111}
                    width={11111}
                    className="rounded-2xl h-full w-auto"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div>{e.name}</div>
                  <div>{e.description}</div>
                </div>
              </div>{" "}
              <div className="flex items-center gap-2 !mx-7">
                <MainBtn text="مشاهده" color="second" />
                <MainBtn text="ویرایش" color="main" />
                <MainBtn text="حذف" color="delete" />
              </div>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsAdmin;
