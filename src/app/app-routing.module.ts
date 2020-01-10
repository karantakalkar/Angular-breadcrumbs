import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: '', redirectTo: '/home', pathMatch: 'full'
        },
        {
          path: 'home', 
          loadChildren: 'src/app/home/home.module#HomeModule'
        },
        {
          path: 'india', 
          loadChildren: 'src/app/india/india.module#IndiaModule'
        }
      ]
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
