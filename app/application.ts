import {Component,AfterViewInit,ElementRef} from '@angular/core';

declare var Omega: any;

@Component({
    selector: 'my-app',
    templateUrl: 'app/application.html'
})
export class Application implements AfterViewInit {

    constructor(private el: ElementRef) {}

    ngAfterViewInit() {
        Omega.init(this.el.nativeElement);
    }
    
}