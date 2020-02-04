import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { CustomersComponent } from './customer components/customer-list/customers.component';
import { RoomsComponent } from './room components/room-list/rooms.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { CustomerDetailComponent } from './customer components/customer-detail/customer-detail.component';
import {RoomRentComponent} from './room components/room-rent/room-rent.component';
import {RentListComponent} from './rent components/rent-list/rent-list.component';
import{AddCustomerComponent} from './customer components/add-customer/add-customer.component';
import{AddRoomComponent} from './room components/add-room/add-room.component';

const routes: Routes = [
  {path:'renting',component:RoomRentComponent},
  {path:'rooms',component:RoomsComponent},
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'detail/:id',component: CustomerDetailComponent},
  {path: 'customers/list',component:CustomersComponent},
  {path:'rent/list',component:RentListComponent},
  {path:'customer/add',component:AddCustomerComponent},
  {path:'room/add',component:AddRoomComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
