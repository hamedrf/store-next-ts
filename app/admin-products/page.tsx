"use client";
import ProductsAdmin from "@/components/admin-products/ProductsAdmin";
import MainBtn, { colorBtn } from "@/components/UI/MainBtn";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AdminProducts = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  const user = data ? JSON.parse(data) : {};

  useEffect(() => {
    if (user.username !== "admin" && user.password !== "admin")
      router.push(`/login`);
  }, [router, user.password, user.username]);

  return (
    <div>
      <div className="w-full h-32 flex justify-center items-center font-bold text-3xl border-b-4 border-blue-600">
        سلام {user.username} خوش امدین به پنل مدریت محصولات{" "}
      </div>
      <div className="w-full my-10 flex justify-center">
        <MainBtn text=" اضافه کردن محصول +" color={colorBtn.second} />
      </div>
      <ProductsAdmin />
    </div>
  );
};

export default AdminProducts;
