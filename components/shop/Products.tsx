import { product } from "@/hook/redux/productsSlice";
import Image from "next/image";

const Products = ({ product }: { product: product }) => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 2xl:col-span-1 md:aspect-[3/4] overflow-hidden justify-between border rounded-3xl flex  md:flex-col py-5">
      <div
        className=""
        style={{
          mixBlendMode: "multiply",
        }}
      >
        <Image
          src="/img.jpg"
          alt={product.name}
          className="w-full h-full"
          width={1000}
          height={1000}
        />
      </div>
      <div className="flex justify-between flex-col w-full h-full">
        <div className="px-4">
          <h1 className="float-right">{product.name}</h1>
        </div>
        <div className="flex justify-between px-6">
          <h3>{product.price}</h3>
          <button>buy</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
