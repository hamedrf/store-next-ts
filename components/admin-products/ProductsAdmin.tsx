"use client";
import { RootState } from "@/hook/redux/store";
import FetchProducts from "../api/FetchProducts";
import { useSelector } from "react-redux";
import Image from "next/image";
import MainBtn from "../UI/MainBtn";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { AutoLogin } from "@/hook/auto_login/AutoLogin";

const ProductsAdmin = () => {
  const produts = useSelector((state: RootState) => state.productsSlice);
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const fetchToken = async () => {
      const token = await AutoLogin();
      if (token) setToken(token);
    };
    fetchToken();
  }, []);
  const handeldelet = async (sulg: string, token: string) => {
    try {
      const response = await axios.delete(
        `https://kharidpardeh.ir/api/products/${sulg}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);
      console.log("Product created successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <FetchProducts />
      <div>
        {produts.all.map((e) => {
          return (
            <div
              key={e.id}
              className="flex justify-between flex-col lg:flex-row border-3 rounded-2xl my-10 !mx-5 hover:!border-4 hover:border-gray-300 items-center gap-4 p-5 overflow-hidden"
            >
              <div className="flex gap-5 items-center flex-col lg:flex-row">
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
                <Link href={`http://localhost:3000/admin-products/${e.slug}`}>
                  <MainBtn text="ویرایش" color="main" />
                </Link>

                <Link href={`http://localhost:3000/shop/${e.slug}`}>
                  <MainBtn text="مشاهده" color="second" />
                </Link>
                <MainBtn
                  text="حذف"
                  color="delete"
                  eventClick={() => handeldelet(e.slug, token)}
                />
              </div>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsAdmin;
