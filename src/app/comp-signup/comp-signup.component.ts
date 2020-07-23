import { ServiceAuthService } from './../service-auth/service-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-signup',
  templateUrl: './comp-signup.component.html',
  styleUrls: ['./comp-signup.component.css']
})
export class CompSignupComponent implements OnInit {

  user = {
    name: null,
    userName: null,
    email: null,
    password: null
  }

  disable: boolean = false;

  constructor(private serviceAuth: ServiceAuthService) { }

  ngOnInit(): void {
  }

  enterName(event) {
    this.user.name = event.target.value;
  }
  enterUsername(event) {
    this.user.userName = event.target.value;
  }
  enterEmail(event) {
    this.user.email = event.target.value;
  }
  enterPassword(event) {
    this.user.password = event.target.value;
  }

  sendOTP() {
    if(this.isValidated(this.user.name) &&
    this.isValidated(this.user.userName) &&
    this.isValidated(this.user.email) &&
    this.isValidated(this.user.password)) {
      console.table(this.user);
      //disbale signup button
      this.disable = true;

      const otp = document.getElementById('otpScreen');
      otp.style.transform = 'translate(0%, -100%)';

      this.serviceAuth.sendOTP(this.user.email);
    }
  }
  isValidated(value: String) {
    return value != null && !value.includes(" ") && value;
  }

  moveOTPBack(event) {
    const otp = document.getElementById('otpScreen');
    otp.style.transform = 'translate(0%, -200%)';
    this.disable = false;
  }

}
