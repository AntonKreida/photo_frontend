export interface INavItem {
    id: number;
    title: string;
    path?: string;
    subNav?: INavItem[];
}
