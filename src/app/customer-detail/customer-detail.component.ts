import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-customer-detail',
    templateUrl: './customer-detail.component.html',
    styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

    public customer: Customer = new Customer(1, "", "", "", "","");

    constructor(
        private route: ActivatedRoute,
        private customerService: CustomerService,
        private location: Location) { }

    ngOnInit() {
        this.getCustomer();

    }

    getCustomer(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.customerService.getCustomer(id)
            .subscribe(customer => this.customer = customer);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.customerService.updateCustomer(this.customer)
            .subscribe(() => this.goBack());
    }

    delete(): void {
        this.customerService.deleteCustomer(this.customer)
            .subscribe(() => this.goBack());
    }

}
