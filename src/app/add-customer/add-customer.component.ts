import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {

  constructor(private customerService: CustomerService) { }

  customer = Customer;
  nameFormControl  = new FormControl('',[Validators.required]);
  emailFormControl = new FormControl('',[Validators.required,Validators.email]);
  telFormControl = new FormControl('',[Validators.required, Validators.pattern(this.getPhoneRegex())]);
  cpfFormControl = new FormControl('',[Validators.required, Validators.pattern(this.getCPFRegex())]);


  
  getPhoneRegex() {
      return /^(\d{2})[6-9]\d{8}$/;
  }

  getCPFRegex(){
    return /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
  }
}
