import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ToastrModule.forRoot()
  ]
})
export class PagesModule { }
