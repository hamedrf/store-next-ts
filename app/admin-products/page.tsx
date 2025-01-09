"use client";
import ProductsAdmin from "@/components/admin-products/ProductsAdmin";
import MainBtn from "@/components/UI/MainBtn";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AutoLogin } from "@/hook/auto_login/AutoLogin";
import Link from "next/link";

const AdminProducts = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  const [token, setToken] = useState<string>("");
  const user = data ? JSON.parse(data) : {};

  useEffect(() => {
    const fetchToken = async () => {
      const token = await AutoLogin();
      if (token) setToken(token);
    };
    fetchToken();

    if (user.username !== "admin" && user.password !== "admin") {
      router.push(`/login`);
    }
  }, [router, user.password, user.username, token]);

  return (
    <div>
      <div className="w-full h-32 flex justify-center items-center font-bold text-3xl border-b-4 border-blue-600">
        سلام {user.username} خوش امدین به پنل مدریت محصولات{" "}
      </div>
      <div className="w-full my-10 flex justify-center">
        <Link href={"http://localhost:3000/admin-products/محصول جدید"}>
          <MainBtn text=" اضافه کردن محصول +" color="second" />
        </Link>
      </div>
      <ProductsAdmin />
    </div>
  );
};

export default AdminProducts;
