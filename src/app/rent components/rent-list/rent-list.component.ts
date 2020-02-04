import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms'; 
import{ RentingService} from '../../renting.service';
import {Rent} from '../../models/rent';
import {Customer} from '../../models/customer';

import * as _ from 'lodash';

@Component({
  providers:[RentingService],
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.css']
})

export class RentListComponent implements OnInit {
  [x: string]: any;
  
  selectedRent: Rent;
  rentings:Rent[];
  displayedColumns:string[] = ['idCustomer', 'roomType', 'dateCheckinRent','dateCheckoutRent','totalDays','finalValue'];
  
  public customer: Customer ;
  public dateCheckinRent: Date;
  public dateCheckoutRent: Date;
  public idCustomer: number;
  public roomType: 'classic' | 'deluxe' = 'classic';
  public totalDays: number;
  public finalValue: number;
  
  customeridForm = new FormControl(this.idCustomer);
  roomtypeForm= new FormControl(this.roomType);
  checkinForm= new FormControl(this.dateCheckinRent);
  checkoutForm= new FormControl(this.dateCheckoutRent);
  daysForm= new FormControl(this.totalDays);
  finalValueForm = new FormControl(this.finalValue);
  
  constructor(private rentingService: RentingService){ }
   ngOnInit() {
   this.getRentings();
   this.customeridForm =  new FormControl(this.idCustomer);
   this.roomtypeForm =  new FormControl(this.roomType);
   this.checkinForm =  new FormControl(this.dateCheckinRent);
   this.checkoutForm =  new FormControl(this.dateCheckoutRent);
   this.daysForm =  new FormControl(this.totalDays);
   this.finalValueForm =  new FormControl(this.finalValue);
}

 getRentings():void{
   this.rentingService.getRentings()
   .subscribe(rentings => this.rentings = rentings);

 }

 add():void{
     let rent = new Rent(); 
    }

 goBack():void{
  this.location.back();
 }

}
