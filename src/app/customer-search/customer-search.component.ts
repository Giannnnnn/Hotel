import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { MatAutocompleteSelectedEvent } from '@angular/material';


@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})

export class CustomerSearchComponent implements OnInit {

  customerCtrl: FormControl;
  customers: Array<Customer>;
  filteredCustomers: Array<Customer>;

  @Output() customerChange = new EventEmitter<Customer>();
  @Input() control: FormControl;
  @Output() controlChange = new EventEmitter<FormControl>();

  constructor(
    private customerService: CustomerService
  ) { }


  ngOnInit() {
    this.customerCtrl = new FormControl('');
    this.customerCtrl.valueChanges
      .subscribe(data => {
        this.filterCustomers(data);
      });
    this.loadCustomers();
  }

 public customerSelected(event: MatAutocompleteSelectedEvent): void {
    let selectedCustomer = this.customers.find(c => c.id == event.option.value)
    this.customerChange.emit(selectedCustomer);
    this.control.setValue(selectedCustomer);
    this.controlChange.emit(this.control);
  }


  private loadCustomers(): void {
    this.customerService.getCustomers()
      .subscribe(customers => {
        this.customers = customers;
        this.filterCustomers('');
      });
  }

  private filterCustomers(filter: string): void {

    if (filter) {
      this.filteredCustomers = this.customers
        .filter(customer => customer.name.toLowerCase().indexOf(filter.toString().toLowerCase()) === 0);
    }
    else {
      this.filteredCustomers = this.customers.slice();
    }
  }

  public displayFn = (id: number): string => {
    console.log(this.filteredCustomers);
    if (id == undefined || !this.filteredCustomers) return '';
    this.customerService.getCustomer(id);

    let index = this.filteredCustomers.findIndex(c => c.id === id);

    return this.filteredCustomers[index].name;
  }

}
