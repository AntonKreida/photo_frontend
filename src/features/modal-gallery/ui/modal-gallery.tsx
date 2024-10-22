"use client";

import {
  FC,
  ReactNode,
  useMemo,
  useState,
} from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { ICardPhoto } from "@entities/";
import { AdapterImage, ModalWrapper, twClassNames } from "@shared/";


interface IModalShowGalleryProps {
    children: ({ onShowModal, onHideModal, modalActive }: {
        onShowModal: (index?: number) => void;
        onHideModal: () => void;
        modalActive: boolean;
    }) => ReactNode;
    cardsPhoto: ICardPhoto[];
}

export const ModalGallery: FC<IModalShowGalleryProps> = ({ children, cardsPhoto }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [modalActive, setModalActive] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const onShowModal = (index?: number) => {
    setModalActive(true);
    setStartIndex(index || 0);
  };
  const onHideModal = () => setModalActive(false);

  const images = useMemo<ReactImageGalleryItem[]>(() => (
    cardsPhoto.map((card) => ({
      original: card.href,
      thumbnail: card.href,
      renderItem: ({ original }) => (
        <div className={ twClassNames("relative max-h-[calc(100vh-80px)]", {
          "h-[500px]": !isFullScreen
        }) }
        >
          <AdapterImage
            alt="image"
            height={ 100 }
            src={ original }
            unoptimized
            width={ 100 }
          />
        </div>
      ),
      renderThumbInner: ({ thumbnail }) => (
        <div className="h-[50px] relative">
          <AdapterImage
            alt="image"
            fill
            src={ thumbnail as string }
            unoptimized
          />
        </div>
      )
    }))
  ), [cardsPhoto, isFullScreen]);


  return (
    <>
      <ModalWrapper
        handleOnCloseModal={ onHideModal }
        isOpen={ modalActive }
      >
        <ImageGallery
          items={ images }
          onScreenChange={ (fillScreen) => setIsFullScreen(fillScreen) }
          showPlayButton={ false }
          startIndex={ startIndex }
        />
      </ModalWrapper>
      { children({ onShowModal, onHideModal, modalActive }) }
    </>
  );
};
