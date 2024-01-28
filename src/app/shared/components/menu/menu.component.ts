import {Component, OnInit} from '@angular/core';
import {MenuInterface} from "./menu.interface";
import {menu} from "./menu";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    model: MenuInterface[] = menu;

    ngOnInit() {
    }
}
