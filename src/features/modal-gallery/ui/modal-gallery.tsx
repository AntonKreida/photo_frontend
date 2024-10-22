"use client";

import {
  FC, ReactNode, useMemo, useState
} from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { AdapterImage, ModalWrapper, twClassNames } from "@shared/";


const imagesMock: ReactImageGalleryItem[] = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

interface IModalShowGalleryProps {
    children: ({ onShowModal, onHideModal, modalActive }: {
        onShowModal: () => void;
        onHideModal: () => void;
        modalActive: boolean;
    }) => ReactNode;
}

export const ModalGallery: FC<IModalShowGalleryProps> = ({ children }) => {
  const [modalActive, setModalActive] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const onShowModal = () => setModalActive(true);
  const onHideModal = () => setModalActive(false);

  const images = useMemo<ReactImageGalleryItem[]>(() => (
    imagesMock.map((image) => ({
      original: image.original,
      thumbnail: image.thumbnail,
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
  ), [isFullScreen]);


  return (
    <>
      { children({ onShowModal, onHideModal, modalActive }) }
      <ModalWrapper
        handleOnCloseModal={ onHideModal }
        isOpen={ modalActive }
      >
        <ImageGallery
          items={ images }
          onScreenChange={ (fillScreen) => setIsFullScreen(fillScreen) }
          showPlayButton={ false }
        />
      </ModalWrapper>
    </>
  );
};
