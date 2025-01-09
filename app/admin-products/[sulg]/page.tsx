"use client";
import React, { useState, useEffect } from "react";
import MainBtn from "@/components/UI/MainBtn";
import axios from "axios";
import { AutoLogin } from "@/hook/auto_login/AutoLogin";
import { useParams } from "next/navigation";
import { product } from "@/hook/redux/productsSlice";
import { useQuery } from "@tanstack/react-query";
interface FormData {
  category_id: string;
  name: string;
  description: string;
  price: string;
  quantity: string;
  pic: File | null;
}

const EditorProducts = () => {
  const [token, setToken] = useState<string>("");
  const param = useParams();
  const sulg = decodeURIComponent(param.sulg as string);

  const [formData, setFormData] = useState<FormData>({
    category_id: "",
    name: "",
    description: "",
    price: "",
    quantity: "",
    pic: null,
  });

  const fetchProduct = async (): Promise<product> => {
    const response = await axios.get(
      `https://kharidpardeh.ir/api/products/${sulg}`
    );
    return response.data.data.product;
  };

  const { data } = useQuery<product, Error>({
    queryKey: ["product", sulg],
    queryFn: fetchProduct,
    enabled: Boolean(sulg !== "محصول جدید"),
  });

  useEffect(() => {
    if (data) {
      const newFormdata: FormData = {
        category_id: "2",
        name: data.name,
        description: data.description,
        price: `${data.price}`,
        quantity: `${data.quantity}`,
        pic: data.pic,
      };
      setFormData(newFormdata);
    }
  }, [data]);

  const [errors, setErrors] = useState({
    category_id: false,
    name: false,
    description: false,
    price: false,
    quantity: false,
    pic: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  //   Validation function
  const validate = () => {
    const newErrors = {
      category_id: !formData.category_id.match(/^\d+$/),
      name: formData.name.length < 2 || formData.name.length > 100,
      description:
        formData.description.length < 2 || formData.description.length > 240,
      price: isNaN(Number(formData.price)) || Number(formData.price) < 10000,
      quantity:
        isNaN(Number(formData.quantity)) || Number(formData.quantity) < 1,
      pic:
        !formData.pic ||
        ![
          "image/jpeg",
          "image/png",
          "image/svg+xml",
          "image/jpg",
          "image/mpeg",
        ].includes(formData.pic.type),
    };
    setErrors(newErrors);
    setIsFormValid(Object.values(newErrors).every((error) => !error));
  };

  //   Validate on formData change
  useEffect(() => {
    const fetchToken = async () => {
      const token = await AutoLogin();
      if (token) setToken(token);
    };

    fetchToken();
  }, []);
  useEffect(() => {
    validate();
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "pic" ? files?.[0] : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      const form = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "pic" && formData.pic) {
          form.append(key, formData.pic);
        } else {
          form.append(key, formData[key as keyof FormData]?.toString() || "");
        }
      });

      console.log("Form submitted:", Object.fromEntries(form.entries()));
      try {
        const response = await axios.post(
          "https://kharidpardeh.ir/api/products",
          form,
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
    }
  };

  return (
    <div
      className="bg-green-400 w-full h-screen flex justify-center items-center"
      style={{ marginTop: "-10vh" }}
    >
      <form
        className="flex w-2/4 h-2/4 bg-white rounded-3xl border-4 border-green-900 overflow-hidden"
        onSubmit={handleSubmit}
      >
        <div className="w-2/4 flex flex-col justify-evenly px-8 bg-blue-500">
          <label htmlFor="category_id">شناسه دسته‌بندی</label>
          <input
            type="text"
            name="category_id"
            id="category_id"
            value={formData.category_id}
            onChange={handleChange}
            className={`border ${
              errors.category_id ? "!border-red-500" : "border-gray-300"
            }`}
          />
          <label htmlFor="name">اسم محصول</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`border ${
              errors.name ? "!border-red-500" : "border-gray-300"
            }`}
          />
          <label htmlFor="description">توضیحات محصول</label>
          <input
            type="text"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className={`border ${
              errors.description ? "!border-red-500" : "border-gray-300"
            }`}
          />
          <label htmlFor="price">قیمت محصول (تومان)</label>
          <input
            type="number"
            name="price"
            id="price"
            value={formData.price}
            onChange={handleChange}
            className={`border ${
              errors.price ? "!border-red-500" : "border-gray-300"
            }`}
          />
          <label htmlFor="quantity">تعداد موجودی</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className={`border ${
              errors.quantity ? "!border-red-500" : "border-gray-300"
            }`}
          />
          <label htmlFor="pic">عکس محصول</label>
          <input
            type="file"
            name="pic"
            id="pic"
            onChange={handleChange}
            className={`border ${
              errors.pic ? "!border-red-500" : "border-gray-300"
            }`}
          />
          <MainBtn
            text="اضافه کردن"
            color={isFormValid ? "main" : "delete"}
            disabled={!isFormValid || !token}
          />
        </div>
      </form>
    </div>
  );
};

export default EditorProducts;
