"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.min.css";

const ZoomEffect = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (inView && elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        {
          opacity: 0,
          transform:
            "translateY(150%) rotateX(-100deg) skew(0deg, 8deg) scale(0.8)",
        },
        {
          opacity: 1,
          transform: "none",
          duration: 0.8,
          delay: 0.1,
        }
      );
    }
  }, [inView]);

  return (
    <span className="parent-zoom-effect">
      <div
        ref={(el) => {
          ref(el);
          elementRef.current = el;
        }}
        className="d-block"
        style={{ opacity: "0" }}
      >
        {children}
      </div>
    </span>
  );
};

export default ZoomEffect;
