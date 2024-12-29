"use client";
import React, { useState, useRef } from "react";
import { gsap } from "gsap";

type Range = {
  type: "range";
  field: string;
};

type Boolean = {
  type: "boolean";
  field: string;
  options: { fieldName: string; value: boolean }[];
};

const FilterField: React.FC<Boolean | Range> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleContent = () => {
    if (contentRef.current) {
      if (isOpen) {
        gsap.to(contentRef.current, {
          maxHeight: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(contentRef.current, {
          maxHeight: 200,
          duration: 1,
          ease: "power2.out",
        });
      }
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="w-full mx-auto text-center border">
      <div
        className="flex justify-end parent-arrow py-4 cursor-pointer relative "
        onClick={toggleContent}
      >
        <div className="arrow "></div>
        <span>click</span>
      </div>
      <div
        ref={contentRef}
        className="text-right  overflow-hidden max-h-0 rounded"
      >
        {props.type == "boolean" ? (
          props.options.map((element, i) => {
            return (
              <div className="text-3xl flex p-5 border-b" key={i}>
                <label htmlFor={element.fieldName} className="w-full px-5 ">
                  asdf
                </label>
                <input
                  id={element.fieldName}
                  type="checkbox"
                  className="w-5 "
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
