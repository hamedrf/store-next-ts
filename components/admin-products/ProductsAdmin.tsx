"use client";
import { RootState } from "@/hook/redux/store";
import FetchProducts from "../api/FetchProducts";
import { useSelector } from "react-redux";
import Image from "next/image";
import MainBtn, { colorBtn } from "../UI/MainBtn";
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
              className="flex justify-between  border-3 rounded-2xl my-10 !mx-5"
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
                <MainBtn text="حذف" color={colorBtn.main} />
                <MainBtn text="حذف" color={colorBtn.main} />
                <MainBtn text="حذف" color={colorBtn.main} />
              </div>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsAdmin;
