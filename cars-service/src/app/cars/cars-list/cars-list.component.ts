import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, stopPropagation, ViewChild, AfterViewInit, NgModule } from '@angular/core';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';
import { HeaderComponent } from '../../shared-module/header/header.component';
import { CarsService } from '../cars.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit, AfterViewInit {

  @ViewChild('totalCostRef') totalCostRef: TotalCostComponent;
  totalCost: number;
  testCost: number;
  grossCost: number;
  cars: Car[];
  carForm: FormGroup;
  // below are example cars array
  /* = [
    {
        id: 1,
        model: 'Mazda Rx7',
        plate: 'GD2121E',
        deliveryDate: '21-04-2017',
        deadline: '05-05-2016',
        client: {
          firstName: 'Jan',
          surname: 'Kowalski'
        },
        cost: 300,
        isFullyDamaged: true
      },
      {
        id: 2,
        model: 'Mercedes 124',
        plate: 'KRK2200',
        deliveryDate: '24-05-2017',
        deadline: '03-06-2016',
        client: {
          firstName: 'Michał',
          surname: 'Nowak'
        },
        cost: 1200,
        isFullyDamaged: false
      },
      {
        id: 3,
        model: 'Renault CLIO',
        plate: 'GWE22011',
        deliveryDate: '02-02-2017',
        deadline: '03-03-2017',
        client: {
          firstName: 'Beata',
          surname: 'Dampc'
        },
        cost: 2800,
        isFullyDamaged: true
   }
  ]
 */



  constructor(private carsService: CarsService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.loadCarsFromService();
    this.carForm = this.buildCarForm();
  }

  buildCarForm() {
    return this.formBuilder.group({
      model: ['', Validators.required],
      type: '',
      plate: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
      deliveryDate: '',
      deadline: '',
      color: '',
      power: '',
      // client: Client;
      clientFirstName: '',
      clientSurname: '',
      cost: '',
      isFullyDamaged: '',
      year: ''
    });
  }

  loadCarsFromService(): void {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.countTotalCost();
    });
  }

  addCar() {
    this.carsService.addCar(this.carForm.value).subscribe(() => {

    });
    this.loadCarsFromService();

  }

  removeCar(car: Car, event) {
    event.stopPropagation();
    this.carsService.removeCar(car.id).subscribe(() => {
      this.loadCarsFromService();
    });
  }

  ngAfterViewInit() {
    this.showGross();
  }

  showGross(): void {
    this.totalCostRef.showGross();
  }
  countTotalCost(): void {
    this.totalCost = this.cars
      .map((car) => car.cost)
      .reduce((prev, next) => prev + next);
  }
  // odebrany parametr OUTPUT
  onShowGross(grossCost: number): void {
    this.grossCost = grossCost;
  }

  goToCarDetails(car: Car) {
    this.router.navigate(['/cars', car.id]);
  }
}
