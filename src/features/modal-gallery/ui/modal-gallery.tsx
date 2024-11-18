"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import {
  FC,
  ReactNode,
  useMemo,
  useState,
} from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { ISessionCard } from "@entities/";
import { ModalWrapper, twClassNames } from "@shared/";


interface IModalShowGalleryProps {
    children: ({ onShowModal, onHideModal, modalActive }: {
        onShowModal: (index?: number) => void;
        onHideModal: () => void;
        modalActive: boolean;
    }) => ReactNode;
    sessionCards: ISessionCard[];
}

export const ModalGallery: FC<IModalShowGalleryProps> = ({ children, sessionCards }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [modalActive, setModalActive] = useState(false);

  const onShowModal = (index?: number) => {
    setModalActive(true);
    setStartIndex(index || 0);
  };
  const onHideModal = () => setModalActive(false);

  const images = useMemo<ReactImageGalleryItem[]>(() => (
    sessionCards.map((card) => ({
      original: `${ process.env.NEXT_PUBLIC_API_URL }${ card.url }`,
      renderItem: ({ original }) => (
        <div className={ twClassNames("relative h-full p-2") }>
          <Image
            alt="image"
            className="w-full h-full pointer-events-none object-contain max-h-[calc(100vh-20px)]"
            height={ card.height }
            priority
            quality={ 100 }
            src={ original }
            width={ card.width }
          />
        </div>
      ),
    }))
  ), [sessionCards]);


  return (
    <>
      <ModalWrapper
        className="w-full max-w-full h-full flex flex-col justify-center items-center"
        classNameInner="w-full h-full flex flex-col justify-center"
        handleOnCloseModal={ onHideModal }
        isOpen={ modalActive }
      >
        <ImageGallery
          items={ images }
          renderLeftNav={ (onClick) => (
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 image-gallery-left-nav group"
              onClick={ onClick  }
            >
              <ChevronLeftIcon
                className="w-20 h-20 fill-carbon group-active:scale-90 transition
                group-hover:fill-gray-400"
              />
            </button>
          ) }
          renderRightNav={ (onClick) => (
            <button
              className="absolute  right-0 top-1/2 -translate-y-1/2 z-10 image-gallery-right-nav group"
              onClick={ onClick }
            >
              <ChevronRightIcon
                className="w-20 h-20 fill-carbon group-active:scale-90 transition
                group-hover:fill-gray-400"
              />
            </button>
          ) }
          showBullets
          showFullscreenButton={ false }
          showIndex={ true }
          showPlayButton={ false }
          showThumbnails={ false }
          startIndex={ startIndex }

        />
      </ModalWrapper>
      { children({ onShowModal, onHideModal, modalActive }) }
    </>
  );
};
