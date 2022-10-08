import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule
  ]
})
export class DashbordModule { }
