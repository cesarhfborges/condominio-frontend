import {Component} from '@angular/core';
import MoradoresMock from "../../../shared/mocks/moradores.mock";

@Component({
    selector: 'app-listar-moradores',
    templateUrl: './listar-moradores.component.html',
    styleUrls: ['./listar-moradores.component.scss']
})
export class ListarMoradoresComponent {

    lista: any[] = MoradoresMock;
}
