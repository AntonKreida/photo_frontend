"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import slider from "../mock/slide.jpg";


const arrayMockSlide = [
  {
    title: "лукбуки",
  },
  {
    title: "кампейн",
  },
  {
    title: "бъюти",
  },
];

export const Slider = () => {
  const [width, setWidth] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!carouselRef.current) return;

    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <div className="mt-[86px]">
      <motion.div
        className="cursor-grab"
        ref={ carouselRef }
      >
        <motion.div
          className="flex"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          { arrayMockSlide.map((item, index) => (
            <div
              className={ `text-carbon uppercase text-sm font-futura-pt
                font-medium min-w-[401px] min-h-[614px] px-[15px]
                pointer-events-none relative` }
              key={ index }
            >
              <Image
                alt="slider"
                className="w-full h-full object-cover"
                height={ 614 }
                src={ slider }
                width={ 371 }
              />
              <span
                className={ `text-white text-3xl font-medium font-futura-pt uppercase
                  absolute left-[50%] bottom-10 translate-x-[-50%]` }
              >
                { item.title }
              </span>
            </div>
          )) }
        </motion.div>
      </motion.div>
    </div>
  );
};
