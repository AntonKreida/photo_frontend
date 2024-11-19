export interface INavItem {
    id: number | string;
    title: string;
    path?: string;
    subNav?: INavItem[];
}
