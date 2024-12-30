"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.min.css";

export enum colors {
  main = "main",
  second = "second",
}
interface UnderlineProps {
  text: string;
  delay?: number;
  color?: colors;
}

const Underline: React.FC<UnderlineProps> = ({
  text,
  delay = 0,
  color = colors.main,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const elementRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (inView && elementRef.current) {
      gsap.to(elementRef.current, {
        width: "100%",
        duration: 1,
        delay: delay,
        ease: "bounce.out",
      });
    }
  }, [inView, elementRef.current]);

  return (
    <span className="position-relative" ref={ref}>
      <span>{text}</span>
      <span
        className={`position-absolute  rounded-5 bg-${color}`}
        ref={elementRef}
        style={{ height: "13%", right: "0px", width: "0%", bottom: "-16%" }}
      ></span>
    </span>
  );
};

export default Underline;
