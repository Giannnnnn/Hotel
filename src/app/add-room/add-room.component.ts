import { Component, OnInit } from '@angular/core';
import {Room} from '../room';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nameFormControl  = new FormControl('',[Validators.required]);

}
