import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CarsService } from './cars.service';
import { Car } from './models/car';
import { Injectable } from '@angular/core';

@Injectable()

// this service: "CarResolve" you must enter to CarsModule in NgModule -> provider:
export class CarResolve implements Resolve<Car> {

  constructor(private carsService: CarsService) {}

    resolve(route: ActivatedRouteSnapshot) {
      return this.carsService.getCar(route.params['id']);
  }
}
