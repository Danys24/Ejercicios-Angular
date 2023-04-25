import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [

  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/pages/profile/profile.module').then(m => m.ProfileModule),
    data: {
      preload: true // este modulo se va a precargar bajo la estrategia de precarga OptInPreloadingStrategy
    }
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      //1-Precarga todos los modulos, elimina la carga perezosa
      //-preloadingStrategy: PreloadAllModules
      //2-No precarga ningun modulo, fuerza la carga perezosa
      //-preloadingStrategy: NoPreloading
      //3-Precarga Personalizada
      // preloadingStrategy: OptInPreloadingStrategy
      // preloadingStrategy: NetworkAwarePreloadStrategy
      preloadingStrategy: OnDemandPreloadingStrategy
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
