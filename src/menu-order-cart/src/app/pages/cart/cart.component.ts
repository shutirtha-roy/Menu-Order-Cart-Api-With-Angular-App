import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() cartList!: any[];

  constructor() { 
    this.cartList = [];
  }

  getTotalPrice() {
    return this.cartList
      .reduce(
        (accumulator, product) => 
          accumulator + product.price, 0
      ).toFixed(2);
  }
}
