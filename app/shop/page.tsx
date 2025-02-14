"use client";
import { RootState } from "@/hook/redux/store";
import FetchProducts from "@/components/api/FetchProducts";
import { useSelector } from "react-redux";
import Products from "@/components/shop/Products";
import { product } from "@/hook/redux/productsSlice";

import FilterField from "@/components/shop/FilterField";
import { useEffect } from "react";

const Shop = () => {
  const produts = useSelector((state: RootState) => state.productsSlice);

  useEffect(() => {
    console.log(produts);
  });

  return (
    <>
      <FetchProducts />
      <div className="grid grid-cols-12 w-screen !gap-y-3 !gap-x-2">
        <div className="col-span-12 md:col-start-2 md:col-span-10 lg:col-span-4 xl:col-span-3 border rounded-3xl py-8 px-6">
          <FilterField
            type="boolean"
            fieldName="اسم محصول"
            target="name"
            options={[
              { fieldName: "گوشی", value: "گوشی2" },
              { fieldName: "ایسر", value: "ایسر" },
              { fieldName: "کتاب", value: "کتاب" },
              { fieldName: "ایسوس", value: "ایسوس" },
            ]}
          />
          <FilterField
            type="boolean"
            target="category"
            fieldName="خالی"
            options={[{ fieldName: "خالی کردن ", value: "3" }]}
          />
        </div>
        <div className="col-span-12 md:col-start-2 md:col-span-10 p-7 lg:col-span-8 xl:col-span-9  grid grid-cols-12 2xl:grid-cols-5 !gap-0 md:!gap-3 lg:!gap-5">
          {produts.all.length != 0 ? (
            produts.show.map((product: product, i) => {
              return <Products key={product.id || i} product={product} />;
            })
          ) : (
            <div className="col-span-12 2xl:col-span-5 flex justify-center items-center">
              در حال بارگیری...
            </div>
          )}
        </div>
        <button onClick={() => console.log(produts)}>click</button>
      </div>
    </>
  );
};

export default Shop;
