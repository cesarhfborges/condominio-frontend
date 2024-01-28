import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListaCondominiosComponent} from "./condominios/lista/lista-condominios.component";
import {EditarCondominioComponent} from "./condominios/editar/editar-condominio.component";
import {ListarMoradoresComponent} from "./moradores/listar/listar-moradores.component";
import {EditarMoradorComponent} from "./moradores/editar/editar-morador.component";

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'condominios',
        component: ListaCondominiosComponent
    },
    {
        path: 'condominios/:id',
        component: EditarCondominioComponent
    },
    // {
    //     path: 'moradores',
    //     component: ListarMoradoresComponent
    // },
    // {
    //     path: 'moradores/:id',
    //     component: EditarMoradorComponent    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {
}
