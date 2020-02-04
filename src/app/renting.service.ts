import { Injectable } from '@angular/core';
import{Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Rent} from './models/rent';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable()
export class RentingService {

  private rentURL = 'http://localhost:5000/api/renting';
  constructor(private http: HttpClient) { }

  getRentings(): Observable<Rent[]>{
    return this.http.get<Rent[]>(this.rentURL)
    .pipe(
      catchError(this.handleError('getRentings',[]))
    );
  }

  getRent(id: number):Observable<Rent>{
    const url= `${this.rentURL}/${id}`;

    return this.http.get<Rent>(url).pipe(
      catchError(this.handleError<Rent>(`getRent id=${id}`))
    );
  }

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error); 
    return of(result as T);
  };
}

updateRent(rent:Rent):Observable<any>{

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  return this.http.put(this.rentURL,Rent,httpOptions)
  .pipe(catchError(this.handleError<any>('updateRent')))
}

addRent(rent: Rent):Observable<Rent>{

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  return this.http.post<Rent>(this.rentURL,rent, httpOptions)
  .pipe(
    catchError(this.handleError<Rent>('addRent'))
);
}


deleteRent(rent:Rent | number):Observable<Rent>{
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

const id = typeof rent === 'number' ? rent : rent.customerID;
const url = `${this.rentURL}/${id}`;

return this.http.delete<Rent>(url,httpOptions).pipe(
  catchError(this.handleError<Rent>('deleteRent'))
)
}

searchRent(term:string):Observable<Rent[]>{
  if(!term.trim()){
    return of ([]);
  }
  return this.http.get<Rent[]>(`api/customers/name=${term}`).pipe(
    catchError(this.handleError<Rent[]>('searchRent',[]))
  );
}

}
