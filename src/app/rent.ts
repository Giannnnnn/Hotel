import {Customer} from './customer';
import {Input, EventEmitter, Output } from '@angular/core';

export class Rent {
  public idRenting:number;
  public idCustomer: number;
  public roomType: 'classic' | 'deluxe' = 'classic';
  public customer: Customer;
  public dateCheckinRent: Date;
  public dateCheckoutRent: Date;
  public totalDays: number;
  public finalValue: number;
  
    constructor(idRenting?:number,idCustomer?: number, roomType?: 'classic' | 'deluxe', dateCheckinRent?: Date, dateCheckoutRent?: Date, totalDays?: number, finalValue?: number) {
      this.idRenting = idRenting; 
      this.idCustomer = idCustomer;
      this.roomType = roomType;
      this.dateCheckinRent = dateCheckinRent;
      this.dateCheckoutRent = dateCheckoutRent;
      this.totalDays = totalDays;
      this.finalValue = finalValue;
    }
  }
   