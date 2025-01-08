"use client";
import ProductsAdmin from "@/components/admin-products/ProductsAdmin";
import MainBtn, { colorBtn } from "@/components/UI/MainBtn";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import imgProduct from "../../public/img2.jpg";
import axios from "axios";
import { AutoLogin } from "@/hook/auto_login/AutoLogin";

const handeladd = async (token: string) => {
  const formData = new FormData();
  const response = await fetch(imgProduct.src);
  const blob = await response.blob();
  const file = new File([blob], "img2.jpg", { type: blob.type });

  formData.append("category_id", "2");
  formData.append("name", "یک محصول تستی");
  formData.append(
    "description",
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، ..."
  );
  formData.append("price", "1213123");
  formData.append("quantity", "12");
  formData.append("pic", file);

  console.log(formData);

  try {
    const response = await axios.post(
      "https://kharidpardeh.ir/api/products",
      formData,
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
  }, [router, user.password, user.username]);

  return (
    <div>
      <div className="w-full h-32 flex justify-center items-center font-bold text-3xl border-b-4 border-blue-600">
        سلام {user.username} خوش امدین به پنل مدریت محصولات{" "}
      </div>
      <div className="w-full my-10 flex justify-center">
        <MainBtn
          text=" اضافه کردن محصول +"
          color={colorBtn.second}
          eventClick={() => handeladd(token)}
        />
      </div>
      <ProductsAdmin />
    </div>
  );
};

export default AdminProducts;
