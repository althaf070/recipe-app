import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReceipieListComponent } from './receipie-list/receipie-list.component';
import { ManageReceipieComponent } from './manage-receipie/manage-receipie.component';
import { UsersComponent } from './users/users.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { RequestComponent } from './request/request.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path:"all-recepies",component:ReceipieListComponent},
  {path:"receipie/add",component:ManageReceipieComponent},
  { path:"all-users",component:UsersComponent},
  { path:"downloads",component:DownloadsComponent},
  { path:"request",component:RequestComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

