import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  getUser(email) {
    if(email == 0) {
      email = localStorage.getItem('LambdaEmail');
    }

    const url = 'https://lambda-dev-community.herokuapp.com/getProfile?email=' + email;

    const headers = new HttpHeaders({
      "LambdaToken" : localStorage.getItem('LambdaToken')
    });

    return this.httpClient.get(url, {headers}).toPromise();
  }
}