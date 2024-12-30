"use client";
import { RootState } from "@/hook/redux/store";
import FetchProducts from "@/components/api/FetchProducts";
import { useSelector } from "react-redux";
import Products from "@/components/shop/Products";
import { product } from "@/hook/redux/productsSlice";

import FilterField from "@/components/shop/FilterField";

const Shop = () => {
  const produts = useSelector((state: RootState) => state.productsSlice);

  return (
    <>
      <FetchProducts />
      <div className="grid grid-cols-12 w-screen gap-y-3 gap-x-2">
        <div className="col-span-12 md:col-start-2 md:col-span-10 p-7 lg:col-span-8 xl:col-span-9  grid grid-cols-12 2xl:grid-cols-5 gap-0 md:gap-3 lg:gap-5">
          {produts.show.map((product: product, i) => {
            return <Products key={product.id || i} product={product} />;
          })}
        </div>
        <div className="col-span-12 md:col-start-2 md:col-span-10 lg:col-span-4 xl:col-span-3 border rounded-3xl py-8 px-6">
          <FilterField
            type="boolean"
            field="hello"
            options={[
              { fieldName: "hamed", value: false },
              { fieldName: "as", value: false },
            ]}
          />
          <FilterField
            type="boolean"
            field="asd"
            options={[{ fieldName: "as", value: false }]}
          />
          <FilterField type="range" field="hello" />
        </div>
        <button onClick={() => console.log(produts)}>click</button>
      </div>
    </>
  );
};

export default Shop;
