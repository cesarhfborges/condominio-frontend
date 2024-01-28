import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {HomeComponent} from './home/home.component';
import {ListaCondominiosComponent} from './condominios/lista/lista-condominios.component';
import {EditarCondominioComponent} from './condominios/editar/editar-condominio.component';
import {SharedModule} from "../shared/shared.module";
import { EditarMoradorComponent } from './moradores/editar/editar-morador.component';
import { ListarMoradoresComponent } from './moradores/listar/listar-moradores.component';


@NgModule({
    declarations: [
        HomeComponent,
        ListaCondominiosComponent,
        EditarCondominioComponent,
        EditarMoradorComponent,
        ListarMoradoresComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        PagesRoutingModule
    ]
})
export class PagesModule {
}
