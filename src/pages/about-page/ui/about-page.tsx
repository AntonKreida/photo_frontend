import Image from "next/image";

import { HeaderPage, LayoutContent, LikeIcon } from "@shared/";

import { listItem } from "../constants/list-item";
import about from "../mock/about.jpg";


const AboutPage = () => (
  <div className="w-full">
    <HeaderPage title="Обо мне" />
    <LayoutContent className="flex gap-[65px] flex-wrap">
      <div className="w-[471px] h-[614px] flex-shrink-0">
        <Image
          alt="about"
          className="w-full h-full object-cover"
          height={ 614 }
          priority
          src={ about }
          width={ 471 }
        />
      </div>
      <div className="flex flex-col gap-[60px] max-w-[400px]">

        <div className="flex flex-col gap-3">
          <h2 className="text-carbon text-xl font-normal font-gabriela">
            Привет! Приятно познакомиться, я
            <br />
            Марамчина Александра – фотограф.
          </h2>
          <p className="text-carbon text-xl font-light font-futura-pt">
            За три года в фотографии я провела более 1000 успешных съёмок, публиковалась в международных журналах,
            работала с брендами и начала обучать фотографии других.
            Знаю всё о позировании и том, как сделать так, чтобы фотографии Вам понравились.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-carbon text-xl font-light font-futura-pt">
          <h2 className="text-carbon text-xl font-normal font-gabriela">
            Почему фотографии ?
          </h2>
          <div>
            <p>
              Честно, она помогла мне реализовать три потребности:
            </p>
            <ul className="list-none">
              { listItem.map((text, index, array) => (
                <li
                  className="text-carbon pl-6 text-xl font-light font-futura-pt relative"
                  key={ index }
                >
                  { index === array.length - 1
                    ? `${text}.`
                    : `${text},` }

                  <LikeIcon className="absolute top-0 left-0 w-5 h-5 translate-y-[35%]" />
                </li>
              )) }
            </ul>
          </div>
          <p>
            Здесь я чувствую себя на своём месте.
            <br />
            Именно поэтому меня ценят клиенты, и мы вместе достигаем крутых результатов.
          </p>
        </div>
      </div>
    </LayoutContent>
  </div>
);

export default AboutPage;
