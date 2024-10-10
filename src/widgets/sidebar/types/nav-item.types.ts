export interface INavItem {
    id: number;
    title: string;
    path: string;
}

export interface ISubNavItem {
    id: number;
    title: string;
    subNav: INavItem[];
}
