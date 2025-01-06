"use client";
import gsap from "gsap";
import { useRef } from "react";

export enum colorBtn {
  main = "main",
  second = "second",
  delete = "delete",
}
const MainBtn = ({
  text,
  color,
  rounded = true,
  eventClick,
}: {
  text: string;
  color: colorBtn;
  rounded?: boolean;
  eventClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  const btnRef = useRef(null);

  const mouseEnter = () => {
    gsap.to(btnRef.current, {
      scaleX: 1.09,
      scaleY: 0.98,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    });
  };
  const mouseLeave = () => {
    gsap.to(btnRef.current, {
      scale: 1,
      duration: 1,
      ease: "elastic.out(1.3, 0.2)",
    });
  };
  return (
    <button
      dir="rtl"
      ref={btnRef}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className={`btn btn-${color} ${rounded && "rounded-xl"} relative`}
      onClick={eventClick || undefined}
    >
      <span className="absolute  w-full h-full flex justify-center items-center z-10 ">
        {text}
      </span>
      {text}
    </button>
  );
};

export default MainBtn;
