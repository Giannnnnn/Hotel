import {Customer} from './customer';
import {Input, EventEmitter, Output } from '@angular/core';

export class Rent {

public rentingID:string;
public customerID: string;
public roomID: string;
public Check_In:Date ;
public Check_Out:Date ;


constructor(customerID?:string,roomID?:string,Check_In?:Date,Check_Out?:Date) {
  this.customerID = customerID;
  this.roomID = roomID;
  this.Check_In = Check_In;
  this.Check_Out = Check_Out;  
}


}

    
  
   