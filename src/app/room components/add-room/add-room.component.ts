import { Component, OnInit } from '@angular/core';
import {Room} from '../../models/room';
import { FormControl, Validators } from '@angular/forms';
import { RoomService } from '../../room.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css'],
  providers:[RoomService]
  
})
export class AddRoomComponent implements OnInit {

  room = Room;
  nameFormControl  = new FormControl('',[Validators.required]);
  
  constructor(private roomService: RoomService) { }

name:string="";
roomType:'classic'|'deluxe' = 'classic';
roomStatus:'reserved'|'occupied'|'available'='available';

nameForm: FormControl;
roomFormControl:FormControl;

  ngOnInit() {
    this.nameForm = new FormControl(this.name);
    this.roomFormControl = new FormControl(this.roomType);
  }

  add():void{
    let roomToAdd = new Room(this.name,this.roomType);
    this.roomService.addRoom(roomToAdd) .subscribe(() => {

    }, (error) => console.log(error));
 }
  

}
