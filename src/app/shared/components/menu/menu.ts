import {MenuInterface} from "./menu.interface";

export const menu: MenuInterface[] = [
    {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/home']},
    {label: 'Condominios', icon: 'pi pi-fw pi-th-large', routerLink: ['/condominios']},
    {label: 'Usuários', icon: 'pi pi-fw pi-user', routerLink: ['/usuarios']},
];
