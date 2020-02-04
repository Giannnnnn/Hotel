import { Injectable } from '@angular/core';
import{Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Customer} from './models/customer';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class CustomerService {

  private customersUrl = 'http://localhost:5000/api/customer';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.customersUrl)
    .pipe(
      catchError(this.handleError('getCustomers',[]))
    );
  }


  getCustomer(id: number):Observable<Customer>{
    const url= `${this.customersUrl}/${id}`;

    return this.http.get<Customer>(url);
  }

private handleError<T> (operation = 'operation', result?: T) {
  
  return (error: any): Observable<T> => {
    console.error(error);
    return of(result as T);
  };
}


updateCustomer(customer:Customer):Observable<any>{

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  return this.http.put(this.customersUrl,customer,httpOptions)
  .pipe(catchError(this.handleError<any>('updateCustomer')))
}


addCustomer(customer: Customer):Observable<string>{
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  return this.http.post<string>(this.customersUrl, customer);

}



deleteCustomer(customer:Customer | number):Observable<Customer>{
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

const id = typeof customer === 'number' ? customer : customer.id;
const url = `${this.customersUrl}/${id}`;

return this.http.delete<Customer>(url,httpOptions).pipe(
  catchError(this.handleError<Customer>('deleteCustomer'))
)
}

searchCustomers(term:string):Observable<Customer[]>{
  if(!term.trim()){
    return of ([]);
  }
  return this.http.get<Customer[]>(`api/customers/name=${term}`).pipe(
    catchError(this.handleError<Customer[]>('searchCustomer',[]))
  );
}

}
