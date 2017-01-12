import {Component,AfterViewInit,ElementRef,trigger,state,transition,style,animate} from '@angular/core';

declare var Omega: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    animations: [
        trigger('submenu', [
            state('hidden', style({
                height: '0px'
            })),
            state('visible', style({
                height: '*'
            })),
            transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
            transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AppComponent implements AfterViewInit {

    constructor(private el: ElementRef) {}

    public menuInactiveDesktop: boolean;
    
    public menuActiveMobile: boolean;
    
    public profileActive: boolean;
    
    public topMenuActive: boolean;
    
    public topMenuLeaving: boolean;

    ngAfterViewInit() {
        //Omega.init(this.el.nativeElement);
    }    
    
    toggleMenu(event: Event) {
        if(this.desktop) {
            this.menuInactiveDesktop = !this.menuInactiveDesktop;
            if(this.menuInactiveDesktop) {
                this.menuActiveMobile = false;
            }
        }
        else {
            this.menuActiveMobile = !this.menuActiveMobile;
            if(this.menuActiveMobile) {
                this.menuInactiveDesktop = false;
            }
        }
        
        if(this.topMenuActive) {
            this.hideTopMenu();
        }
        
        event.preventDefault();
    }
    
    toggleProfile(event: Event) {
        this.profileActive = !this.profileActive;
        event.preventDefault();
    }
    
    toggleTopMenu(event: Event) {
        this.menuActiveMobile = false;
        
        if(this.topMenuActive) {
            this.hideTopMenu();
        }
        else {
            this.topMenuActive = true;
        }
        
        event.preventDefault();
    }
    
    hideTopMenu() {
        this.topMenuLeaving = true;
        setTimeout(() => {
            this.topMenuActive = false;
            this.topMenuLeaving = false;
        }, 500);
    }
    
    get desktop() {
        return window.innerWidth > 1024;
    }
}