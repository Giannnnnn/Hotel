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
import { RentListComponent } from './rent-list/rent-list.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { RoomRentComponent } from './room-rent/room-rent.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RentDetailComponent } from './rent-detail/rent-detail.component';
import { MatIconModule, MatListModule} from  '@angular/material';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddRoomComponent } from './add-room/add-room.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomersComponent,
    CustomerDetailComponent,

    RoomsComponent,
    RentListComponent,
    CustomerSearchComponent,
    RoomRentComponent,
    RentDetailComponent,
    AddCustomerComponent,
    AddRoomComponent,
  ],
  imports: [
    MatSidenavModule,
    MatIconModule,
    BrowserModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatMomentDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatStepperModule,
    BrowserModule,
    MatSliderModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule,
    HttpClientModule,
    MatTableModule,
    MatRadioModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
    FlexLayoutModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  exports:[
    MatDatepickerModule,
    MatButtonModule
  ],
  providers: [CustomerService,MatDatepickerModule,MatFormFieldModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
