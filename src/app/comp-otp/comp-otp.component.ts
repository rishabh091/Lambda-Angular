import { Router } from '@angular/router';
import { ServiceAuthService } from './../service-auth/service-auth.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comp-otp',
  templateUrl: './comp-otp.component.html',
  styleUrls: ['./comp-otp.component.css']
})
export class CompOtpComponent implements OnInit {

  @Output()
  backEvent = new EventEmitter<boolean>();

  otp: String;
  user: any;
  enteredOTP: String;
  showError: boolean = false;
  showSpinner:boolean = false;

  error:String = "Wrong OTP";

  constructor(private serviceAuth: ServiceAuthService, private router: Router) { }

  ngOnInit(): void {
    this.serviceAuth.otp.subscribe(data => {
      let object = JSON.parse(data);

      this.otp = object.otp;
      this.user = object.user;
    });
  }

  moveBack() {
    const value = true;
    this.backEvent.emit(value);
  }

  enterOTP(event) {
    this.enteredOTP = event.target.value;
  }

  checkOTP() {
    this.showSpinner = true;

    console.log(this.otp)

    if(this.enteredOTP == this.otp) {
      this.showError = false;
      //automatic login
      this.serviceAuth.register(this.user)
      .then(res => {
        this.serviceAuth.login(this.user)
        .then((res:any) => {

          //save token to localStorage
          localStorage.setItem("LambdaToken", res.token);
          localStorage.setItem("LambdaEmail", this.user.email);

          this.router.navigate(['']);
        })
        .catch(err => {
          this.error = "Error logging try manual logging";
          this.showError = true;
          this.showSpinner = false;
        })
      })
      .catch(err => {
        this.error = "User already registered.";
        this.showError = true;
        this.showSpinner = false;
      });
    }
    else {
      this.showSpinner = false;
      this.showError = true;
    }
  }

}
