import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component'
import { CallbackComponent } from './pages/callback/callback.component';


import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'event/:id',
    loadChildren: './pages/event/event.module#EventModule',
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'admin',
    loadChildren: './pages/admin/admin.module#AdminModule',
    canActivate: [
      AuthGuard,
      AdminGuard
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    AuthGuard,
    AdminGuard
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
