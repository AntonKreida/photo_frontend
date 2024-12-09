"use client";

import Link, { LinkProps } from "next/link";
import {
  AnchorHTMLAttributes, FC, MouseEventHandler, ReactNode,
  useEffect,
  useState
} from "react";

import { twClassNames } from "../../lib";


type TAnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

interface IScrollLinkProps extends TAnchorProps, LinkProps {
    children: ReactNode;
    className?: string;
    heightVisible?: number;
}


export const ScrollLink: FC<IScrollLinkProps> = ({
  children,
  className,
  heightVisible = 0,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll: MouseEventHandler<HTMLAnchorElement>  = (event) => {
    event.preventDefault();

    const targetId = event.currentTarget.href.replace(/.*#/, "");
    const element = document.getElementById(targetId);

    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleScrollVisible = () => {
      if (window.scrollY > heightVisible) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScrollVisible);

    return () => window.removeEventListener("scroll", handleScrollVisible);
  }, [heightVisible]);


  return (
    <Link
      className={ twClassNames("transition duration-300 hover:text-orochimaru fixed bottom-10 right-5 z-[9999]", {
        ["hidden"]: !isVisible
      }, className) }
      onClick={ handleScroll }
      { ...props }
    >
      { children }
    </Link>
  );
};
