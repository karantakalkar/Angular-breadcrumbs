import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatesComponent } from './states/states.component';
import { HaryanaComponent } from './states/haryana/haryana.component';
import { DelhiComponent } from './states/haryana/delhi/delhi.component'

const routes: Routes = [
  {
    path:'',
    data: {
      breadcrumb: 'India'
    },
    children: [
     {
        path:'',
        data: {
          breadcrumb: null
        },
        component: StatesComponent
     },
     {
       path: 'haryana',
       data: {
        breadcrumb: 'Haryana'
      },
      children: [
        {
          path: '',
          data: {
            breadcrumb: null
          },
          component: HaryanaComponent,
        },
        {
          path: 'delhi',
          data: {
            breadcrumb: 'Delhi'
          },
          component: DelhiComponent,
        }
      ]
     }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndiaRoutingModule { }
