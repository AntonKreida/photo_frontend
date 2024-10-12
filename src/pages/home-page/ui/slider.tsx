"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";


// TODO: Убрать мок когда перейдем к бэку
import { ROUTES_PAGES } from "@shared/";

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
    <motion.div
      className="cursor-grab"
      ref={ carouselRef }
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className="flex"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        { arrayMockSlide.map((item, index) => (
          <div
            className={ `text-carbon uppercase text-sm font-futura-pt
                font-medium min-w-[401px] min-h-[614px] px-[15px] relative` }
            key={ index }
          >
            <Image
              alt="slider"
              className="w-full h-full object-cover pointer-events-none"
              height={ 614 }
              src={ slider }
              width={ 371 }
            />
            <Link
              className={ `text-white text-3xl z-10 font-medium font-futura-pt uppercase
                  absolute left-[50%] bottom-10 translate-x-[-50%] hover:text-orochimaru transition-[color]` }
              href={ ROUTES_PAGES.LOOKBOOK }
            >
              { item.title }
            </Link>
          </div>
        )) }
      </motion.div>
    </motion.div>
  );
};
