import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { MenuComponent } from './menu/menu.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    MenuComponent,
    CheckoutComponent,
    OrderComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ToastrModule.forRoot()
  ]
})
export class PagesModule { }
