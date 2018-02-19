import {Component, Input, OnInit, trigger, state, transition, style, animate} from '@angular/core';
import {MenuItem} from 'primeng/primeng';
import {AppComponent} from './app.component';

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
                label: 'Components', icon: 'fa-home', badge: '2',
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
                label: 'Template Pages', icon: 'fa-life-saver', badge: '8', badgeStyleClass: 'green-badge',
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
    /* tslint:disable:component-selector */
    selector: '[app-submenu]',
    /* tslint:enable:component-selector */
    template: `
        <ul>
            <ng-template ngFor let-child let-i="index" [ngForOf]="(root ? item : item.items)">
                <li [ngClass]="{'active-menuitem': isActive(i), 'ui-state-disabled':child.disabled}" [class]="child.badgeStyleClass">
                    <a *ngIf="!child.routerLink" [href]="child.url||'#'" (click)="itemClick($event,child,i)"
                       [attr.tabindex]="!visible ? '-1' : null"  [attr.target]="child.target">
                        <i class="fa fa-fw" [ngClass]="child.icon"></i>
                        <span>{{child.label}}</span>
                        <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
                        <i class="fa fa-fw fa-angle-down" *ngIf="child.items"></i>
                    </a>
                    <a *ngIf="child.routerLink" (click)="itemClick($event,child,i)" [attr.target]="child.target"
                        [routerLink]="!child.disabled?child.routerLink:null" routerLinkActive="active-menuitem-routerlink"
                       [routerLinkActiveOptions]="{exact: true}">
                        <i class="fa fa-fw" [ngClass]="child.icon"></i>
                        <span>{{child.label}}</span>
                        <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
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
export class AppSubMenuComponent {

    @Input() item: MenuItem;

    @Input() root: boolean;

    @Input() visible: boolean;

    activeIndex: number;

    constructor(public app: AppComponent) {}

    itemClick(event: Event, item: MenuItem, index: number) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }

        this.activeIndex = (this.activeIndex === index) ? null : index;

        // execute command
        if (item.command) {
            item.command({originalEvent: event, item: item});
        }

        // prevent hash change
        if (item.items || (!item.url && !item.routerLink)) {
            setTimeout(() => {this.app.scrollerViewChild.moveBar(); }, 400);
            event.preventDefault();
        }

        if (!item.items) {
            this.app.menuActiveMobile = false;
        }
    }

    isActive(index: number): boolean {
        return this.activeIndex === index;
    }
}
