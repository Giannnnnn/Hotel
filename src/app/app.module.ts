import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { RoomsComponent } from './rooms/rooms.component';
import { CustomerService } from './customer.service';
import { HttpClientModule } from '@angular/common/http'; 
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ClassicRoomDetailsComponent } from './classic-room-details/classic-room-details.component';
import { DeluxeRoomDetailsComponent } from './deluxe-room-details/deluxe-room-details.component';
import { RentListComponent } from './rent-list/rent-list.component';
import { ClassicRoomRentComponent } from './classic-room-rent/classic-room-rent.component';
import { DeluxeRoomRentComponent } from './deluxe-room-rent/deluxe-room-rent.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomersComponent,
    CustomerDetailComponent,
    RoomsComponent,
    ClassicRoomDetailsComponent,
    DeluxeRoomDetailsComponent,
    RentListComponent,
    ClassicRoomRentComponent,
    DeluxeRoomRentComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
