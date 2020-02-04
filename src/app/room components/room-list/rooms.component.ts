import { Component, OnInit } from '@angular/core';
import { Room } from '../../models/room';
import {RoomService} from '../../room.service';
import * as _ from 'lodash';
import { FormControl } from '@angular/forms';

@Component({
  providers:[RoomService],
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit{
  constructor(private roomService: RoomService){}

  [x: string]: any;

  selectedRoom:Room;
  rooms:Room[];
  displayedColumns: string[]=['name','roomType','roomStatus'];

  name:string="";
  roomType:'Classic'|'Deluxe'='Classic';
  roomStatus:'Available'|'Reserved'|'Occupied'='Available';

  nameForm:FormControl;
  typeForm:FormControl;

  ngOnInit() {
    this.getRooms();
  }

  getRooms(){
    this.roomService.getRooms()
    .subscribe(rooms => this.rooms = rooms);
  }

  goBack():void{
    this.location.back();
  }

}
