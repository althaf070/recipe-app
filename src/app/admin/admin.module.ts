import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReceipieListComponent } from './receipie-list/receipie-list.component';
import { ManageReceipieComponent } from './manage-receipie/manage-receipie.component';
import { UsersComponent } from './users/users.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { RequestComponent } from './request/request.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipe';


@NgModule({
  declarations: [
    ReceipieListComponent,
    ManageReceipieComponent,
    UsersComponent,
    DownloadsComponent,
    RequestComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SearchPipe
  ]
})
export class AdminModule { }
