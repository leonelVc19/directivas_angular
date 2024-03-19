import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomeLabelDirective } from './directives/custome-label.directive';



@NgModule({
  declarations: [
    CustomeLabelDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomeLabelDirective
  ]
})
export class SharedModule { }
