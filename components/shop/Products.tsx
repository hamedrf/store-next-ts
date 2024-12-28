import { product } from "@/hook/redux/productsSlice";
import Image from "next/image";

const Products = ({ product }: { product: product }) => {
  return (
    <div className="col-span-10 md:col-span-6  xl:col-span-4 2xl:col-span-3 aspect-[3/4]  bg-violet-500 rounded-3xl flex flex-col">
      <div className="">
        <Image
          src="/img.jpg"
          alt={product.name}
          className="w-full h-full"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Products;
