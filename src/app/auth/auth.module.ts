import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    NgOptimizedImage
  ]
})
export class AuthModule {
}
