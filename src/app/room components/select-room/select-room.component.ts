import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { RoomService } from '../../room.service';
import { Room } from '../../models/room';
import { Rent } from '../../models/rent';

@Component({
  providers:[RoomService],
  selector: 'app-select-room',
  templateUrl: './select-room.component.html',
  styleUrls: ['./select-room.component.css'],
  
})
export class SelectRoomComponent implements OnInit {
  rooms:Room[];
  displayedColumns: string[]=['select', 'name','roomType','roomStatus'];
  selection = new SelectionModel<Room>(true, []);


  name:string="";
  roomType:'Classic'|'Deluxe'='Classic';
  roomStatus:'Available'|'Reserved'|'Occupied'='Available';

constructor(private roomService: RoomService) {}

//the output that then will be emitted using the function masterToggle()
  @Output() room = new  EventEmitter<Room>();

  ngOnInit(){
    this.getRooms();
  }

  isSelected() {
    const numSelected = this.selection.selected;
    return numSelected;
  }

  getRooms(){
    this.roomService.getRooms()
    .subscribe(rooms => this.rooms = rooms);
  }

  //function declared at the HTML to select the data
  public masterToggle(event, row){
    console.log(row);
    //stop the propagation of JS
    event.stopPropagation();
    //$event.stopPropagation()
    this.room.emit(row);
  }


}