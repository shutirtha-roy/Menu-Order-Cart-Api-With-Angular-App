import { Injectable } from '@angular/core';
import { IMenu } from '../models/IMenu';
import { menu } from '../data/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenuList() : IMenu[] {
    return menu;
  }
}