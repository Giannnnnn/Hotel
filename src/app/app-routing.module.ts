import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { Customer } from './customer';
import { CustomersComponent } from './customers/customers.component';
import { RoomsComponent } from './rooms/rooms.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import{ClassicRoomDetailsComponent} from './classic-room-details/classic-room-details.component';
import{DeluxeRoomDetailsComponent} from './deluxe-room-details/deluxe-room-details.component';
import { DeluxeRoomRentComponent} from './deluxe-room-rent/deluxe-room-rent.component';
import{ClassicRoomRentComponent} from './classic-room-rent/classic-room-rent.component';

const routes: Routes = [
  
  {path:'rooms',component:RoomsComponent},
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'detail/:id',component: CustomerDetailComponent},
  {path: 'customers',component:CustomersComponent},
  {path:'rooms/classic',component:ClassicRoomDetailsComponent},
  {path:'rooms/classic/renting',component:ClassicRoomRentComponent},
  {path:'rooms/deluxe',component:DeluxeRoomDetailsComponent},
  {path:'rooms/deluxe/renting',component:DeluxeRoomDetailsComponent},
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
