import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceAuthService {

  private messageSource = new BehaviorSubject('Default Message');
  otp = this.messageSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  sendOTP(email) {
    const url = 'https://lambda-dev-community.herokuapp.com/otp';
    const data = { email: email }
    
    this.httpClient.post(url, data).subscribe((res: any) => {
      this.messageSource.next(res.toString());
    })
  }
}
