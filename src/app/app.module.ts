import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        CoreModule,
        SharedModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        // {provide: LocationStrategy, useClass: HashLocationStrategy},
        // CountryService, CustomerService, EventService, IconService, NodeService,
        // PhotoService, ProductService, MenuService, BreadcrumbService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
