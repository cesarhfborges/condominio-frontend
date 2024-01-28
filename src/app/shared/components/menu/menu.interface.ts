export interface MenuInterface {
    label: string;
    icon?: string;
    disabled?: boolean;
    visible?: boolean;
    routerLink?: string | string[];
    badge?: number;
    items?: MenuInterface[];
    class?: string | string[];
    preventExact?: boolean;
    url?: string | string[];
    target?: string;
}
