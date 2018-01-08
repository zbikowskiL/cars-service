import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import {CarsListComponent} from './cars/cars-list/cars-list.component';


const APP_ROUTES: Route[] = [
  // this is startup routing for application
  { path: '', pathMatch: 'full', redirectTo: 'cars' },

  { path: 'cars', component: CarsListComponent }
];

@NgModule ({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

// This class AppRoutingModule shuld be paste to AppModule/NgModule imports:
export class AppRoutingModule {}
