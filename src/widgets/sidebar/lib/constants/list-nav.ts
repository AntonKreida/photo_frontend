import { ROUTES_PAGES } from "@shared/index";


export const listNav = [
  {
    id: 1,
    title: "Обо мне",
    path: ROUTES_PAGES.ABOUT,
  },
  {
    id: 2,
    title: "Для брендов",
    subNav: [
      {
        id: 3,
        title: "Лукбуки",
        path: ROUTES_PAGES.LOOKBOOK,
      },
      {
        id: 4,
        title: "Кампейн",
        path: ROUTES_PAGES.CAMPAIGN,
      },
      {
        id: 5,
        title: "Предметное фото",
        path: ROUTES_PAGES.SUBJECT,
      },
      {
        id: 6,
        title: "Бьюти",
        path: ROUTES_PAGES.BEAUTY,
      }
    ],
  },
  {
    id: 3,
    title: "Для блогов и экспертов",
    path: ROUTES_PAGES.BLOCKS,
  },
  {
    id: 4,
    title: "Личные фотосессии",
    path: ROUTES_PAGES.PHOTO_SESSIONS,
  },
  {
    id: 5,
    title: "Публикация в журналах",
    path: ROUTES_PAGES.MAGAZINE,
  },
  {
    id: 6,
    title: "Прайс",
    path: ROUTES_PAGES.PRICE,
  },
  {
    id: 7,
    title: "Отзывы",
    path: ROUTES_PAGES.REVIEWS,
  }
];
