"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FC, useEffect, useRef, useState
} from "react";

import { ISlider } from "../lib";


interface ISliderProps {
    sliders: ISlider[];
}

export const Slider: FC<ISliderProps> = ({ sliders }) => {
  const [width, setWidth] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!carouselRef.current) return;
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <motion.div
      className="cursor-grab h-full xl:h-fit"
      ref={ carouselRef }
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        className="flex w-fit xl:h-fit h-full"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        { sliders.map((slider) => (
          <div
            className={ `text-carbon uppercase text-sm font-futura-pt
                font-medium w-[401px] h-full xl:h-[614px] relative px-[15px] first:pl-0 last:pr-0` }
            key={ slider.documentId }
          >
            <Image
              alt="slider"
              className="w-full h-full object-cover pointer-events-none shadow "
              height={ slider?.sliderImage?.height ?? 614 }
              priority
              quality={ 100 }
              src={ `${ process.env.NEXT_PUBLIC_API_URL }${ slider.sliderImage.url }` }
              width={ slider?.sliderImage?.width ?? 401 }
            />
            <Link
              className={ `text-white text-3xl z-10 font-medium font-futura-pt uppercase
                  absolute left-[50%] bottom-10 translate-x-[-50%] hover:text-orochimaru transition-[color]` }
              href={ slider.url }
            >
              { slider.title }
            </Link>
          </div>
        )) }
      </motion.div>
    </motion.div>
  );
};
