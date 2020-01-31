import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Customer } from '../customer';
import * as moment from 'moment';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-room-rent',
  templateUrl: './room-rent.component.html',
  styleUrls: ['./room-rent.component.css']
})


export class RoomRentComponent implements OnInit {




  public calculatedValue: number;
  public totalDays: number;
  public checkInDate: Date;
  public checkOutDate: Date;
  public idCustomer: number;
  public roomType: 'classic' | 'deluxe' = 'classic';


  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  classicRoom: FormControl;
  deluxeRoom: FormControl;
  dateCheckin: FormControl;
  dateCheckout: FormControl;

  public formGroup: FormGroup;


  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this.firstFormGroup = new FormGroup({
      'customerCtrl': new FormControl('', [Validators.required]),
      'roomTypeCtrl': new FormControl(this.roomType, [Validators.required]),
      'teste': new FormGroup({})
    });

    this.secondFormGroup = new FormGroup({
      'roomTypeCtrl': new FormControl(this.roomType, [Validators.required])
    });

    this.thirdFormGroup = new FormGroup({
      'checkInCtrl': new FormControl(this.checkInDate, [Validators.required])
    });

    this.fourthFormGroup = new FormGroup({
      'checkOutCtrl': new FormControl(this.checkOutDate, [Validators.required])
    });

    this.fifthFormGroup = new FormGroup({
    });

  }


  public valueChanged(event: Customer): void {
    this.idCustomer = event.id;
  }

  calculateValue(): void {

    this.totalDays = this.fourthFormGroup.controls.checkOutCtrl.value
      .diff(this.thirdFormGroup.controls.checkInCtrl.value, 'days');

    if (this.secondFormGroup.controls.roomTypeCtrl.value.toString() === 'classic') {
      this.calculatedValue = this.totalDays * 98;
    }

    else if (this.secondFormGroup.controls.roomTypeCtrl.value.toString() === 'deluxe') {
      this.calculatedValue = this.totalDays * 150;
    }

  }

  public save(): void {
    if (this.fourthFormGroup.valid) {

      this.calculateValue();

      let rent = new Rent(this.idCustomer,
        this.secondFormGroup.controls.roomTypeCtrl.value.toString(),
        this.thirdFormGroup.controls.checkInCtrl.value.toDate(),
        this.fourthFormGroup.controls.checkOutCtrl.value.toDate(), this.totalDays,
        this.calculatedValue);

      console.log("blabla");
    } else {
      console.log("dados incompletos");
    }

  }

  public stepHasChanged(event): void {
    if (event.selectedIndex == 4) {
      this.calculateValue();
    }
  }
}





export class Rent {

  public dateCheckinRent: Date;
  public dateCheckoutRent: Date;
  public idCustomer: number;
  public roomType: 'classic' | 'deluxe' = 'classic';
  public customer: Customer;
  public totalDays: number;
  public finalValue: number;

  constructor(idCustomer?: number, roomType?: 'classic' | 'deluxe', dateCheckinRent?: Date, dateCheckoutRent?: Date, totalDays?: number, finalValue?: number) {
    this.idCustomer = idCustomer;
    this.roomType = roomType;
    this.dateCheckinRent = dateCheckinRent;
    this.dateCheckoutRent = dateCheckoutRent;
    this.totalDays = totalDays;
    this.finalValue = finalValue;
  }



}
