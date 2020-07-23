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
  enteredOTP: String;
  showError: boolean = false;

  constructor(private serviceAuth: ServiceAuthService) { }

  ngOnInit(): void {
    this.serviceAuth.otp.subscribe(otp => this.otp = otp);
  }

  moveBack() {
    const value = true;
    this.backEvent.emit(value);
  }

  enterOTP(event) {
    this.enteredOTP = event.target.value;
  }

  checkOTP() {
    console.log(this.otp)
    if(this.enteredOTP == this.otp) {
      this.showError = false;
    }
    else {
      this.showError = true;
    }
  }

}
