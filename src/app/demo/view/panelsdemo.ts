import {Component,OnInit} from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Component({
    templateUrl: 'app/demo/view/panelsdemo.html'
})
export class PanelsDemo implements OnInit {
    
    items: MenuItem[];
    
    ngOnInit() {
        this.items = [
            {label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
            {label: 'Documentation', icon: 'fa-book', routerLink: ['/documentation']}
        ];
    }
}