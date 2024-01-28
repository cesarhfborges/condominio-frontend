import {Component, OnDestroy} from '@angular/core';
import {MenuItem, MenuItemCommandEvent} from 'primeng/api';
import {Subscription} from 'rxjs';
import {FullLayoutComponent} from "../../layouts/full/full-layout.component";
import {AppComponent} from 'src/app/app.component';
import {SessionService} from "../../../core/session/session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnDestroy {

  subscription: Subscription;

  items: MenuItem[];
  userMenu: MenuItem[] = [
    {
      label: 'Perfil',
      icon: 'pi pi-user',
      routerLink: '/profile'
    },
    {
      separator: true,
    },
    {
      label: 'Sair',
      icon: 'pi pi-power-off',
      command: (event: MenuItemCommandEvent) => {
        this.session.sessionClear();
        this.router.navigate(['/login']).catch();
      },
    }
  ];

  constructor(
    // public breadcrumbService: BreadcrumbService,
    public app: AppComponent,
    public layout: FullLayoutComponent,
    private session: SessionService,
    private router: Router
  ) {
    // this.subscription = breadcrumbService.itemsHandler.subscribe(response => {
    //     this.items = response;
    // });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
