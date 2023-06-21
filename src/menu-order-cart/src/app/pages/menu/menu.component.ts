import { Component } from '@angular/core';
import { IMenu } from 'src/app/core/models/IMenu';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuList!: IMenu[];
  cartList!: any[];
  
  constructor(private menuService: MenuService) { 
    this.setMenuList();
    this.cartList = [];
  }

  setMenuList() {
    this.menuList = this.menuService.getMenuList();
    console.log(this.menuList);
  }

  addToCart(id: any, name: any, price: any) {
    this.cartList.push({id, name, price});
  }
}
