"use client";
import MainBtn from "@/components/UI/MainBtn";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const router = useRouter();

  useEffect(() => {
    alert("نام کاربری و رمز admin  هستش ");
  }, []);
  const handleNavigation = () => {
    if (user.username === "admin" && user.password === "admin")
      router.push(
        `/admin-products?data=${encodeURIComponent(JSON.stringify(user))}`
      );
    else alert("نام کاربری یا رمز ورود اشتباه است");
  };
  return (
    <div
      className="h-screen w-screen bg-second flex justify-center items-center"
      style={{ marginTop: "-10vh" }}
    >
      <div className=" !border-8 !border-green-900 rounded-2xl bg-white h-2/4 w-2/4 lg:w-1/4 md:w-1/3 flex justify-center  flex-col md:px-10 ">
        <div className="mb-16 text-center font-bold text-2xl">
          پنل ورود مدیر
        </div>
        <div className="flex flex-col justify-center ">
          <input
            type="text"
            name="name"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="border rounded-2xl !py-3 !px-2 mx-2 !my-4"
            placeholder="نام"
          />
          <input
            type="password"
            name="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="border rounded-2xl !py-3 !px-2 mx-2 !my-4"
            placeholder="رمز ورود"
          />
          <MainBtn text="ورود" color="main" eventClick={handleNavigation} />
        </div>
      </div>
    </div>
  );
};

export default Login;
