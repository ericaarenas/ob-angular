import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: 'hijo', //rutas hijas /home/hijo
        component: HomePageComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'contacts',
    component: ContactsPageComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'contacts/:id',
    component: ContactDetailPageComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
