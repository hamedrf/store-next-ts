"use client";
import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { filterdata, product } from "@/hook/redux/productsSlice";
import { AppDispatch } from "@/hook/redux/store";
import { useDispatch } from "react-redux";

type Range = {
  type: "range";
  fieldName: string;
  target: keyof product;
};

type Boolean = {
  type: "boolean";
  fieldName: string;
  target: keyof product;
  options: { fieldName: string; value: string }[];
};

const FilterField: React.FC<Boolean | Range> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const dispatch: AppDispatch = useDispatch();

  const toggleContent = () => {
    if (contentRef.current) {
      if (isOpen) {
        gsap.to(contentRef.current, {
          maxHeight: 0,
          duration: 1,
          ease: "bounce.out",
          overflow: "hidden",
        });
      } else {
        gsap.to(contentRef.current, {
          overflowY: "scroll",
          maxHeight: 200,
          duration: 1,
          ease: "power4.out",
        });
      }
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="w-full mx-auto text-center border">
      <div
        className="flex justify-start parent-arrow py-4 cursor-pointer relative "
        onClick={toggleContent}
      >
        <div className="arrow "></div>
        <span>{props.fieldName}</span>
      </div>
      <div
        ref={contentRef}
        className="text-right  max-h-0 rounded"
        style={{ overflow: "hidden" }}
      >
        {props.type == "boolean" ? (
          props.options.map((element, i) => {
            return (
              <div className="text-3xl flex !p-5 border-b " key={i}>
                <label
                  htmlFor={element.fieldName}
                  className="w-full px-5 cursor-pointer"
                >
                  {element.fieldName}
                </label>
                <input
                  id={element.fieldName}
                  onClick={() =>
                    dispatch(
                      filterdata({ target: props.target, value: element.value })
                    )
                  }
                  type="checkbox"
                  className="w-5 cursor-pointer"
                />
              </div>
            );
          })
        ) : (
          <div> range</div>
        )}
      </div>
    </div>
  );
};

export default FilterField;
