import { Injectable } from '@angular/core';
import{Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Customer} from './customer';
import{CUSTOMERS} from './mock-customers';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class CustomerService {

  

  private customersUrl = 'api/customers';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.customersUrl)
    .pipe(
      catchError(this.handleError('getCustomers',[]))
    );
  }

  getCustomer(id: number):Observable<Customer>{
    const url= `${this.customersUrl}/${id}`;
    return this.http.get<Customer>(url).pipe(
      catchError(this.handleError<Customer>(`getHero id=${id}`))
    );
  }

  
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

updateCustomer(customer:Customer):Observable<any>{

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  return this.http.put(this.customersUrl,customer,httpOptions)
  .pipe(catchError(this.handleError<any>('updateCustomer')))
}

addCustomer(customer: Customer):Observable<Customer>{

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  return this.http.post<Customer>(this.customersUrl, customer, httpOptions)
  .pipe(
    catchError(this.handleError<Customer>('addCustomer'))
);
} 

}
