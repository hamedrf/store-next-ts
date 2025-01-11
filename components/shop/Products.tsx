import { product } from "@/hook/redux/productsSlice";
import Image from "next/image";
import Link from "next/link";
import MainBtn from "../UI/MainBtn";

const Products = ({ product }: { product: product }) => {
  return (
    <Link
      href={`http://localhost:3000/shop/${product.name}`}
      className="no-underline text-black col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 2xl:col-span-1 md:aspect-[3/4] overflow-hidden justify-between border hover:!border-2 rounded-3xl flex  md:flex-col py-5 mb-8"
    >
      <div
        className=""
        style={{
          mixBlendMode: "multiply",
        }}
      >
        <Image
          src="/img.jpg"
          alt={product.name}
          className="!h-full w-full "
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex justify-between flex-col w-full h-full">
        <div className="px-4">
          <h1 className="float-right">{product.name}</h1>
        </div>
        <div className="flex justify-between items-center px-6">
          <h3>{product.price} تومان </h3>
          <MainBtn text="مشاهده" color="main" />
        </div>
      </div>
    </Link>
  );
};

export default Products;
