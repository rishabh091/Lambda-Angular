import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceSearchService {

  constructor(private httpClient: HttpClient) { }

  searchUser(data) {
    const url = 'https://lambda-dev-community.herokuapp.com/search/user?search=' + data;
    const headers = new HttpHeaders({
      "LambdaToken": localStorage.getItem('LambdaToken')
    });

    return this.httpClient.get(url, {headers}).toPromise();
  }
}
