import {Component,AfterViewInit,ElementRef} from '@angular/core';

declare var Omega: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {

    constructor(private el: ElementRef) {}

    ngAfterViewInit() {
        Omega.init(this.el.nativeElement);
    }
    
}