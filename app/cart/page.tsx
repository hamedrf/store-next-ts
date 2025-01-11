"use client";
import MainBtn from "@/components/UI/MainBtn";
import { RootState } from "@/hook/redux/store";
import Image from "next/image";
import { useSelector } from "react-redux";

const Cart = () => {
  const produts = useSelector((state: RootState) => state.productsSlice);

  return (
    <div className="grid grid-cols-12 gap-4 px-2 ">
      <div className="col-span-12 md:col-span-9 border rounded-2xl  ">
        {produts.cart.length !== 0 ? (
          produts.cart.map((e) => {
            return (
              <div
                key={e.id}
                className="flex justify-between border-3 rounded-2xl my-10 !mx-5 hover:!border-4 hover:border-gray-300 overflow-hidden"
              >
                <div className="flex gap-5">
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
                </div>
                <div className="flex items-center gap-2 !mx-7">
                  {e.price}X {e.quantityOrdered} = {e.price * e.quantityOrdered}
                </div>
              </div>
            );
          })
        ) : (
          <div>هیچ محصولی وجود نداد</div>
        )}
      </div>
      <div className="col-span-12 md:col-span-3 border rounded-2xl flex flex-col gap-8 p-10">
        جمع کل قیمت :{" "}
        {produts.cart.reduce(
          (total, item) => total + item.price * item.quantityOrdered,
          0
        )}{" "}
        تومان
        <MainBtn text="خرید نهایی " color="second" />
      </div>
    </div>
  );
};

export default Cart;
