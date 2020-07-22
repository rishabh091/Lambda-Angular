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

  dataToggle: String = null;
  dataTarget: String = null;

  constructor() { }

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
    }
  }
  isValidated(value: String) {
    return value != null && !value.includes(" ") && value;
  }

}
