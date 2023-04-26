import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RandomUserpageComponent } from './pages/random-userpage/random-userpage.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { OnDemandPreloadingStrategy } from './routes/preloading-strategies/on-demand-preloading-strategy';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children : [
      {
        path: '',
        component: HomePageComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'contactos',
        component: ContactsPageComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'tareas',
        component: TasksPageComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'contactos/:id',
        component: ContactDetailPageComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'random',
        component: RandomUserpageComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'firestore',
        loadChildren: () => import('./modules/pages/fire-store/fire-store.module').then(m => m.FireStoreModule),
        canActivate: [AuthGuard],
        data: {
          preload:true
        }
      },
      {
        path: '**',
        component: NotFoundPageComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,

    {
      preloadingStrategy: OnDemandPreloadingStrategy
    }

  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
