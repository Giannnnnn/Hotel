import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../models/customer';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    customers: Customer[] = [];

    public customerControl: FormControl ;

    constructor(private customerService: CustomerService,
        private router: Router) { }

    ngOnInit() {
        this.customerControl = new FormControl();
        this.getCustomers();
    }

    getCustomers(): void {
        this.customerService.getCustomers()
            .subscribe(customers => this.customers = customers.slice(1, 5));

        this.customerControl.valueChanges.subscribe(value => {
            this.router.navigate(['detail', value.id]);
        });
    }
}
