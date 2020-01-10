import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer'; 
import { FormsModule, FormControl, Validators } from '@angular/forms'; 
import {CUSTOMERS} from '../mock-customers';
import{ CustomerService} from '../customer.service';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
import * as _ from 'lodash';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

//after exporting the class, these methods inside, will be able to be called anywhere
export class CustomersComponent implements OnInit {
  
  selectedCustomer: Customer; 
  customers: Customer[];

  displayedColumns: string[] = ['id', 'name', 'email','tel','cpf'];

  name: string="";
  email:  string ="";
  tel: string ="";
  cpf:string="";


  nameForm: FormControl;
  emailForm:FormControl;
  telForm:FormControl;
  cPFForm:FormControl;


  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
    this.nameForm = new FormControl(this.name);
    this.emailForm = new FormControl(this.email);
    this.telForm = new FormControl(this.tel);
    this.cPFForm = new FormControl(this.cpf);

  }

  getCustomers():void{
    this.customerService.getCustomers()
    .subscribe(customers => this.customers = customers);
  }

  add():void{
    
    let customer = new Customer(6, this.name, this.email,this.tel,this.cpf); 
   
    this.customerService.addCustomer(customer)
    .subscribe(customer=>{

      this.customers = this.customers.concat([customer]);

    });

    // CustomerDetailComponent():void{
    // routerLink="/detail/{{customer.id}};}


  }
  
}
