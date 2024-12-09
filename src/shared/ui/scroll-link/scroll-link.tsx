"use client";

import Link, { LinkProps } from "next/link";
import { useTransitionState } from "next-transition-router";
import {
  AnchorHTMLAttributes, FC, MouseEventHandler, ReactNode,
  useEffect,
  useState
} from "react";

import { twClassNames } from "@shared/lib";


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
  const { isReady } = useTransitionState();

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
    const abortController = new AbortController();

    const handleScrollVisible = () => {
      if (window.scrollY > heightVisible) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScrollVisible, { signal: abortController.signal });

    return () => abortController.abort();
  }, [heightVisible]);


  return (
    <Link
      className={ twClassNames("transition duration-300 hover:text-orochimaru fixed bottom-10 right-5 z-[9999]", {
        ["hidden"]: !isVisible || !isReady
      }, className) }
      onClick={ handleScroll }
      { ...props }
    >
      { children }
    </Link>
  );
};
