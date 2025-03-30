import { ROUTES_PAGES } from "@shared/index";

import { INavItem } from "../interfaces";


export const listNav: INavItem[] = [
  {
    id: 1,
    title: "Обо мне",
    path: ROUTES_PAGES.ABOUT,
  },
  {
    id: 2,
    title: "Портфолио",
    subNav: [
      {
        id: 3,
        title: "Индивидуальные",
        path: ROUTES_PAGES.INDIVIDUAL,
      },
      {
        id: 4,
        title: "Семейные",
        path: ROUTES_PAGES.FAMILY,
      },
      {
        id: 5,
        title: "Свадебные",
        path: ROUTES_PAGES.WEDDING,
      },
      {
        id: 6,
        title: "Бренды",
        path: ROUTES_PAGES.BRAND,
      },
      {
        id: 7,
        title: "Репортаж",
        path: ROUTES_PAGES.REPORT,
      }
    ],
  },
  {
    id: 7,
    title: "Обучение",
    subNav: [],
  },
  {
    id: 8,
    title: "Прайс",
    path: ROUTES_PAGES.PRICE,
  },
  {
    id: 9,
    title: "Отзывы",
    path: ROUTES_PAGES.REVIEWS,
  }
];
