import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndiaRoutingModule } from './india-routing.module';
import { StatesComponent } from './states/states.component';
import { HaryanaComponent } from './states/haryana/haryana.component';
import { DelhiComponent } from './states/haryana/delhi/delhi.component';

@NgModule({
  declarations: [StatesComponent, HaryanaComponent, DelhiComponent],
  imports: [
    CommonModule,
    IndiaRoutingModule
  ]
})
export class IndiaModule { }
