import { Component, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import {FullLayoutComponent} from "../../layouts/full/full-layout.component";
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent  implements OnDestroy {
    subscription: Subscription;

    items: MenuItem[];

    constructor(
        // public breadcrumbService: BreadcrumbService,
        public app: AppComponent,
        public layout: FullLayoutComponent
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
