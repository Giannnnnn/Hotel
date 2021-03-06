import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer'; 
import { FormControl } from '@angular/forms'; 
import{ CustomerService} from '../../customer.service';
import * as _ from 'lodash';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})


export class CustomersComponent implements OnInit {
  [x: string]: any;

  selectedCustomer: Customer; 
  customers: Customer[];
  displayedColumns: string[] = ['name', 'email','tel','cpf','status'];

  
  name: string="";
  email:  string ="";
  tel: string ="";
  cpf:string="";
  status :'ok' | 'overdue' = 'ok';


  nameForm: FormControl;
  emailForm:FormControl;
  telForm:FormControl;
  cPFForm:FormControl;
  statusForm:FormControl;

  constructor(private customerService: CustomerService) { }

  
  ngOnInit() {
    this.getCustomers();
    this.nameForm = new FormControl(this.name);
    this.emailForm = new FormControl(this.email);
    this.telForm = new FormControl(this.tel);
    this.cPFForm = new FormControl(this.cpf);
    this.statusForm = new FormControl(this.status);
  }

  getCustomers():void{
    this.customerService.getCustomers()
    .subscribe(customers => {
      this.customers = customers;
    }
      );
  }

  
  goBack(): void {
    this.location.back();
}
  
}
