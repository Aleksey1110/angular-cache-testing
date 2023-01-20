import { NgModule } from '@angular/core';
import { SharedModule } from 'projects/shared/src/public-api';
import { CartComponent } from './cart.component';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
