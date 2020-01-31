import { Injectable } from '@angular/core';
import{Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Room} from './room';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class RoomService {

  private roomURL = 'api/rooms';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Room[]>{
    return this.http.get<Room[]>(this.roomURL)
    .pipe(
      catchError(this.handleError('getCustomers',[]))
    );
  }

  getRoom(id: number):Observable<Room>{
    const url= `${this.roomURL}/${id}`;

    return this.http.get<Room>(url).pipe(
      catchError(this.handleError<Room>(`getRoom id=${id}`))
    );
  }

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error); 
    return of(result as T);
  };
}

updateCustomer(customer:Room):Observable<any>{

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  return this.http.put(this.roomURL,Room,httpOptions)
  .pipe(catchError(this.handleError<any>('updateRoom')))
}

addCustomer(room: Room):Observable<Room>{

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  return this.http.post<Room>(this.roomURL, room, httpOptions)
  .pipe(
    catchError(this.handleError<Room>('addRoom'))
);
}


deleteCustomer(room:Room | number):Observable<Room>{
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

const id = typeof room === 'number' ? room : room.RoomId;
const url = `${this.roomURL}/${id}`;

return this.http.delete<Room>(url,httpOptions).pipe(
  catchError(this.handleError<Room>('deleteCustomer'))
)
}

searchCustomers(term:string):Observable<Room[]>{
  if(!term.trim()){
    return of ([]);
  }
  return this.http.get<Room[]>(`api/customers/name=${term}`).pipe(
    catchError(this.handleError<Room[]>('searchCustomer',[]))
  );
}

}
