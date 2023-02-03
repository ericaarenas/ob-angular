import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

    //login del usuario en regRes
    login(email:String, password: string): Observable<any> {

      let body = {
        email: email,
        password: password,
      }

      return this.http.post('https://regres.in/api/login', body)
    }
  }


