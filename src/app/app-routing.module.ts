import {PreloadAllModules, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {FullLayoutComponent} from "./shared/layouts/full/full-layout.component";
import {BasicLayoutComponent} from "./shared/layouts/basic/basic-layout.component";
import {AuthGuard} from "./core/guards/auth.guard";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: '',
        component: BasicLayoutComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
          }
        ]
      },
      {
        path: '',
        component: FullLayoutComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
          }
        ]
      },
      {path: '**', redirectTo: '/notfound'},
    ], {
      scrollPositionRestoration: 'enabled',
      useHash: false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
