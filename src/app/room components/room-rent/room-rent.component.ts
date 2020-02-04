import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Customer } from '../../models/customer';
import * as moment from 'moment';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { ConsoleReporter } from 'jasmine';
import { Rent } from '../../models/rent';
import { Room } from '../../models/room';
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

  public room :Room;
  public rent : Rent;

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
  this.rent = new Rent();
    this.firstFormGroup = new FormGroup({
      'customerCtrl': new FormControl('', [Validators.required])
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
    console.log(this.room);
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
    console.log(this.room);
    if (this.fourthFormGroup.valid) {

      this.calculateValue();

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


