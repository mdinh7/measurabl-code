import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './test-user-data';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Make requests here
  getUserNames(): Observable<User[]> {
    return this.http.get<User[]>('http://5c37c33f7820ff0014d927c5.mockapi.io/msr/names')
  }

  getUserAges(): Observable<User[]> {
    return this.http.get<User[]>('http://5c37c33f7820ff0014d927c5.mockapi.io/msr/ages')
  }


  constructor(
    private http: HttpClient,
  ) { }
}
