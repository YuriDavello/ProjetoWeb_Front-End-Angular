import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url?: string = 'http://localhost:8080/pwe'

  constructor(
    private http: HttpClient
  ) { }

  public register(user: User) {
    console.log(user)
    let obs = this.http.post(`${this.url}/register`, user);
    obs
      .subscribe(
        (resp) => {
          console.log(resp)
        }
      );
    return obs;
  }
}
