import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SurnameShortCutPipe } from './pipes/surname-short-cut.pipe';
import { ImportantDirective } from './directives/important.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HeaderComponent, SurnameShortCutPipe, ImportantDirective],
  declarations: [HeaderComponent, SurnameShortCutPipe, ImportantDirective]
})
export class SharedModule { }
