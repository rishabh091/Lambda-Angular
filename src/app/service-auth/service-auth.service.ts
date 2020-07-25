import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthService {

  private messageSource = new BehaviorSubject('\"Default Message\"');
  otp = this.messageSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  sendOTP(user) {
    const url = 'https://lambda-dev-community.herokuapp.com/otp';
    const data = { email: user.email }
    
    this.httpClient.post(url, data).subscribe((res: any) => {
      this.messageSource.next(JSON.stringify({
        otp: res.toString(),
        user: user
      }));
    })
  }

  login(user) {
    const url = 'https://lambda-dev-community.herokuapp.com/login';

    return this.httpClient.post(url, user).toPromise();
  }

  register(user) {
    const url = 'https://lambda-dev-community.herokuapp.com/register';

    return this.httpClient.post(url, user).toPromise();
  }

  isTokenPresent() {
    const token = localStorage.getItem('LambdaToken');

    if(token != null) {
      return true;
    }
    
    return false;
  }
}
