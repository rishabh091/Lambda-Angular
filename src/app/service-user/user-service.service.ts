import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  getUser(key) {
    const headers = new HttpHeaders({
      "LambdaToken" : localStorage.getItem('LambdaToken')
    });

    if(key == 0) {
      key = localStorage.getItem('LambdaEmail');

      const url = 'https://lambda-dev-community.herokuapp.com/getProfile?email=' + key;

      return this.httpClient.get(url, {headers}).toPromise();
    }

    //else get user by id
    const url = 'https://lambda-dev-community.herokuapp.com/getUser?id=' + key;

    return this.httpClient.get(url, {headers}).toPromise();
  }

  update(user) {
    const url = 'https://lambda-dev-community.herokuapp.com/updateProfile';

    const headers = new HttpHeaders({
      "LambdaToken": localStorage.getItem('LambdaToken')
    })

    return this.httpClient.post(url, user, {headers}).toPromise();
  }

  updateEmail(email, id) {
    const url = 'https://lambda-dev-community.herokuapp.com/updateEmail?email=' + email + "&id=" + id;
    console.log(url);

    const headers = new HttpHeaders({
      "LambdaToken": localStorage.getItem('LambdaToken')
    })

    return this.httpClient.get(url, {headers}).toPromise();
  }

  updatePassword(password) {
    const url = 'https://lambda-dev-community.herokuapp.com/updatePassword';

    const headers = new HttpHeaders({
      "LambdaToken": localStorage.getItem('LambdaToken')
    })

    const data = {
      _id: JSON.parse(localStorage.getItem('LambdaUser'))._id,
      password: password
    }

    return this.httpClient.post(url, data, {headers}).toPromise();
  }
}
