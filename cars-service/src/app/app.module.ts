import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CarsModule } from './cars/cars.module';
import { CarsService } from './cars/cars.service';
import { CoreModule } from './core-module/core.module';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { AppRoutingModule } from './app-routing-module';
import { CarsRoutingModule } from './cars/cars-routing.module';
import { ImportantDirective } from './shared-nodule/directives/important.directive';



@NgModule({
  declarations: [
    AppComponent,
    ImportantDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarsModule,
    CoreModule,
    AppRoutingModule,
    CarsRoutingModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
