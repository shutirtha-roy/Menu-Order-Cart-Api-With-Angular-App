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

  constructor(private menuService: MenuService) { 
  }

  getMenuList() {
    return this.menuService.getMenuList();
  }
}
