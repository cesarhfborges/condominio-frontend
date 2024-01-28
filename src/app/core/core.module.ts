import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpService} from "./services/http.service";
import {AuthGuard} from "./guards/auth.guard";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    HttpService,
    AuthGuard
  ]
})
export class CoreModule {
}
