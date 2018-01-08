import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { HeaderComponent } from '../shared-module/header/header.component';
import { SharedModule } from '../shared-module/shared.module';
import { CoreModule } from '../core-module/core.module';
import { CarDetailsComponent } from './car-details/car-details.component';
import { RouterModule } from '@angular/router';
import { CarResolve } from './cars-resolve.service';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule
  ],
  exports: [CarsListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    CarResolve
  ],
  declarations: [CarsListComponent, TotalCostComponent, CarDetailsComponent]
})

export class CarsModule { }
