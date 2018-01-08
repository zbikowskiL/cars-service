import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';
import { resolve } from 'q';
import { CarResolve } from './cars-resolve.service';



const CARS_ROUTES: Route[] = [
 {
   path: 'cars/:id',
   component: CarDetailsComponent,
   resolve: { car: CarResolve }
  }
];

@NgModule ({
  imports: [
    RouterModule.forChild(CARS_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

// This class CarsRoutingModule shuld be paste to AppModule/NgModule imports:
export class CarsRoutingModule {}
