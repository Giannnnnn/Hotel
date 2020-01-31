import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.css']
})

export class RentListComponent {
  displayedColumns = ['id', 'name', 'check_In', 'check_Out','roomType','value'];

dataSource = new MatTableDataSource(ELEMENT_DATA);
}

export interface Element {
  id: number;
  name: string;
  check_In: string;
  check_Out: string;
  roomType:string;
  value: number;
}

 const ELEMENT_DATA: Element[] = [
  {id: 1, name: "Hydrogen", check_In:new Date("2020-01-10").toLocaleDateString(),check_Out:new Date("2020-01-10").toLocaleDateString(),roomType:"classic",value:3754.00},
  {id: 2, name: "Gião", check_In:new Date("2020-01-10").toLocaleDateString(),check_Out:new Date("2020-01-10").toLocaleDateString(),roomType:"classic",value:7634.0},
  {id: 3, name: "Selônio", check_In:new Date("2020-01-10").toLocaleDateString(),check_Out:new Date("2020-01-10").toLocaleDateString(),roomType:"deluxe",value:100.0},
  {id: 4, name: "Fargo", check_In:new Date("2020-01-10").toLocaleDateString(),check_Out:new Date("2020-01-10").toLocaleDateString(),roomType:"classic",value:1110.0},
  {id: 5, name: "Anduin", check_In:new Date("2020-01-10").toLocaleDateString(),check_Out:new Date("2020-01-10").toLocaleDateString(),roomType:"deluxe",value:156.0},
  {id: 6, name: "Frodo", check_In:new Date("2020-01-10").toLocaleDateString(),check_Out:new Date("2020-01-10").toLocaleDateString(),roomType:"classic",value:435.0},
  {id: 7, name: "Gandalf", check_In:new Date("2020-01-10").toLocaleDateString(),check_Out:new Date("2020-01-10").toLocaleDateString(),roomType:"deluxe",value:867.0},
];