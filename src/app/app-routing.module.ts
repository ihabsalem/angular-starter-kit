import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Routing } from './core/constants/routing';


const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: Routing.AUTH
  },
  {
    path: Routing.AUTH,
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: Routing.BUSINESS,
    loadChildren: './business/business.module#BusinessModule'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)], // , { useHash: true }
  exports: [RouterModule]
})
export class AppRoutingModule { }
