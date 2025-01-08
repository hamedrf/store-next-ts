"use client";
import ProductsAdmin from "@/components/admin-products/ProductsAdmin";
import MainBtn, { colorBtn } from "@/components/UI/MainBtn";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import imgProduct from "../../public/img.jpg";
import { useAutoLogin } from "@/hook/auto_login/useAutoLogin";

const handeladd = async (token) => {
  const formData = new FormData();
  const response = await fetch(imgProduct.src);
  const blob = await response.blob();
  const file = new File([blob], "img.jpg", { type: blob.type });

  formData.append("category_id", "1");
  formData.append("name", "یک محصول تستی");
  formData.append(
    "description",
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
  );
  formData.append("price", "1213123");
  formData.append("quantity", "12");
  formData.append("pic", file);

  try {
    const response = await fetch(`https://kharidpardeh.ir/api/products`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error creating product:", errorData);
      throw new Error("Failed to create product");
    }

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
  const user = data ? JSON.parse(data) : {};
  const token = useAutoLogin();

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
