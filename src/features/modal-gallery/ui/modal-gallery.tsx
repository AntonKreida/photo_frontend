"use client";

import {
  FC,
  ReactNode,
  useMemo,
  useState,
} from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { ISessionCard } from "@entities/";
import { AdapterImage, ModalWrapper, twClassNames } from "@shared/";


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
  const [isFullScreen, setIsFullScreen] = useState(false);

  const onShowModal = (index?: number) => {
    setModalActive(true);
    setStartIndex(index || 0);
  };
  const onHideModal = () => setModalActive(false);

  const images = useMemo<ReactImageGalleryItem[]>(() => (
    sessionCards.map((card) => ({
      original: `${ process.env.NEXT_PUBLIC_API_URL }${ card.url }`,
      renderItem: ({ original }) => (
        <div className={ twClassNames("relative h-full p-2", {
          "h-[500px]": !isFullScreen
        }) }
        >
          <AdapterImage
            alt="image"
            className="object-contain max-h-[calc(100vh-20px)] h-full"
            classNameWrapper="w-full h-full"
            height={ card.height }
            priority
            quality={ 100 }
            src={ original }
            width={ card.width }
          />
        </div>
      ),
    }))
  ), [sessionCards, isFullScreen]);


  return (
    <>
      <ModalWrapper
        handleOnCloseModal={ onHideModal }
        isOpen={ modalActive }
      >
        <ImageGallery
          items={ images }
          onScreenChange={ (fillScreen) => setIsFullScreen(fillScreen) }
          showBullets
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
