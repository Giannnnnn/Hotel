import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../customer.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit{
  
  constructor(private customerService: CustomerService) { }

  
  customer = Customer;
  nameFormControl  = new FormControl('',[Validators.required]);
  emailFormControl = new FormControl('',[Validators.required]);
  telFormControl = new FormControl('',[Validators.required]);
  //, Validators.pattern(this.getPhoneRegex())
  cpfFormControl = new FormControl('',[Validators.required]);
  //, Validators.pattern(this.getCPFRegex())
  
  
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
  
  ngOnInit(){
    this.nameForm = new FormControl(this.name);
    this.emailForm = new FormControl(this.email);
    this.telForm = new FormControl(this.tel);
    this.cPFForm = new FormControl(this.cpf);
    this.statusForm = new FormControl(this.status);
  }
  getPhoneRegex() {
      return /^(\d{2})[6-9]\d{8}$/;
  }

  getCPFRegex(){
    return /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
  }

  add():void{
    let customerToAdd = new Customer(this.name,this.email,this.tel,this.cpf,this.status);
     this.customerService.addCustomer(customerToAdd)
     .subscribe(() => {

     }, (error) => console.log(error));
  }
}
