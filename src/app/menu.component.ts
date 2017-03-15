import {Component,Input,OnInit,EventEmitter,ViewChild,trigger,state,transition,style,animate} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/primeng';

@Component({
    selector: 'app-menu',
    template: `
        <div class="menu">
            <ul app-submenu [item]="model" root="true"></ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    model: MenuItem[];
    
    ngOnInit() {
        this.model = [
            {label: 'Dashboard', icon: 'fa-home', routerLink: ['/']},
            {
                label: 'Components', icon: 'fa-home', routerLink: ['/'],
                items: [
                    {label: 'Sample Page', icon: 'fa-columns', routerLink: ['/sample']},
                    {label: 'Forms', icon: 'fa-code', routerLink: ['/forms']},
                    {label: 'Data', icon: 'fa-table', routerLink: ['/data']},
                    {label: 'Panels', icon: 'fa-list-alt', routerLink: ['/panels']},
                    {label: 'Overlays', icon: 'fa-square', routerLink: ['/overlays']},
                    {label: 'Menus', icon: 'fa-minus-square-o', routerLink: ['/menus']},
                    {label: 'Messages', icon: 'fa-circle-o-notch', routerLink: ['/messages']},
                    {label: 'Charts', icon: 'fa-area-chart', routerLink: ['/charts']},
                    {label: 'File', icon: 'fa-columns', routerLink: ['/file']},
                    {label: 'Misc', icon: 'fa-arrow-circle-o-up', routerLink: ['/misc']}
                ]
            },
            {label: 'Landing', icon: 'fa-certificate', url: 'assets/pages/landing.html', target: '_blank'},
            {
                label: 'Template Pages', icon: 'fa-life-saver', routerLink: ['/'],
                items: [
                    {label: 'Empty Page', icon: 'fa-square-o', routerLink: ['/empty']},
                    {label: 'Login Page', icon: 'fa-sign-in', url: 'assets/pages/login.html', target: '_blank'},
                    {label: 'Error Page', icon: 'fa-exclamation-circle', url: 'assets/pages/error.html', target: '_blank'},
                    {label: '404 Page', icon: 'fa-times', url: 'assets/pages/404.html', target: '_blank'},
                    {label: 'Access Denied Page', icon: 'fa-exclamation-triangle', url: 'assets/pages/access.html', target: '_blank'}
                ]
            },
            {
                label: 'Menu Hierarchy', icon: 'fa-gg',
                items: [
                    {
                        label: 'Submenu 1', icon: 'fa-sign-in',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'fa-sign-in',
                                items: [
                                    {label: 'Submenu 1.1.1', icon: 'fa-sign-in'},
                                    {label: 'Submenu 1.1.2', icon: 'fa-sign-in'},
                                    {label: 'Submenu 1.1.3', icon: 'fa-sign-in'},
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'fa-sign-in',
                                items: [
                                    {label: 'Submenu 1.2.1', icon: 'fa-sign-in'},
                                    {label: 'Submenu 1.2.2', icon: 'fa-sign-in'}
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'fa-sign-in',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'fa-sign-in',
                                items: [
                                    {label: 'Submenu 2.1.1', icon: 'fa-sign-in'},
                                    {label: 'Submenu 2.1.2', icon: 'fa-sign-in'},
                                    {label: 'Submenu 2.1.3', icon: 'fa-sign-in'},
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'fa-sign-in',
                                items: [
                                    {label: 'Submenu 2.2.1', icon: 'fa-sign-in'},
                                    {label: 'Submenu 2.2.2', icon: 'fa-sign-in'}
                                ]
                            },
                        ]
                    }
                ]
            },
            {label: 'Documentation', icon: 'fa-book', routerLink: ['/documentation']}
        ];
    }
}

@Component({
    selector: '[app-submenu]',
    template: `
        <ul>
            <ng-template ngFor let-child let-i="index" [ngForOf]="(root ? item : item.items)">
                <li [ngClass]="{'active-menuitem': isActive(i)}">
                    <a [href]="child.url||'#'" (click)="itemClick($event,child,i)">
                        <i class="fa fa-fw" [ngClass]="child.icon"></i>
                        <span>{{child.label}}</span>
                        <i class="fa fa-fw fa-angle-down" *ngIf="child.items"></i>
                    </a>
                    <ul app-submenu [item]="child" *ngIf="child.items" [@children]="isActive(i) ? 'visible' : 'hidden'" ></ul>
                </li>
            </ng-template>
        </ul>
    `,
    animations: [
        trigger('children', [
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
export class AppSubMenu {

    @Input() item: MenuItem;
    
    @Input() root: boolean;
        
    activeIndex: number;
        
    constructor(public router: Router, public location: Location) {}
        
    itemClick(event: Event, item: MenuItem, index: number) {
        if(item.disabled) {
            event.preventDefault();
            return true;
        }
        
        this.activeIndex = (this.activeIndex === index) ? null : index;
        
        if(!item.url||item.routerLink) {
            event.preventDefault();
        }
        
        if(item.command) {
            if(!item.eventEmitter) {
                item.eventEmitter = new EventEmitter();
                item.eventEmitter.subscribe(item.command);
            }
            
            item.eventEmitter.emit({
                originalEvent: event,
                item: item
            });
        }

        if(item.routerLink) {
            this.router.navigate(item.routerLink);
        }
    }
    
    isActive(index: number): boolean {
        return this.activeIndex === index;
    }
}