import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Car } from './models/car';
import 'rxjs/add/operator/map'; // This is needed to download .map

@Injectable()

// CarsService should be injected to app.module and to app.component,ts providers[CarsService]
export class CarsService {

  private apiUrl = 'http://localhost:3000/api/cars';
  constructor(private http: Http) { }

  getCars(): Observable<Car[]> {
    return this.http.get(this.apiUrl)
          .map((response) => response.json());
  }

  getCar(id: number): Observable<Car> {
    return this.http.get(this.apiUrl + `/${id}`)
          .map((response) => response.json());
  }

  addCar(data): Observable<Car> {
    return this.http.post(this.apiUrl, data)
    .map((response) => response.json());
  }

  updateCar(id: number, data ): Observable<Car> {
    return this.http.put(this.apiUrl + `/${id}`, data)
         .map((response) => response.json());
  }

  removeCar(id: number): Observable<Car> {
    return this.http.delete(this.apiUrl + `/${id}`)
         .map((response) => response.json());
  }

}
