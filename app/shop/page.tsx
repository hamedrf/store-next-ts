"use client";
import {} from "@/components/redux/productsSlice";
import { RootState } from "@/components/redux/store";
import { UseFetchProducts } from "@/hooks/api/useFetchProduts";
import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { useEffect } from "react";

const Shop = () => {
  const count = useSelector((state: RootState) => state);
  // const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    console.log(count);
  });
  UseFetchProducts();

  return (
    <>
      <div className="flex justify-center w-full items-center h-40 text-4xl font-medium bg-cyan-300">
        {" "}
        This is shop page{" "}
      </div>
      <div className="grid grid-cols-12 w-screen gap-y-3 gap-x-2">
        <div className="col-span-12 md:col-start-2 md:col-span-10 lg:col-span-8 xl:col-span-9 bg-teal-800 grid grid-cols-12 gap-0 md:gap-3 lg:gap-5">
          f
        </div>
        <div className="col-span-12 md:col-start-2 md:col-span-10 lg:col-span-4 xl:col-span-3 bg-teal-400">
          f
        </div>
      </div>
    </>
  );
};

export default Shop;
