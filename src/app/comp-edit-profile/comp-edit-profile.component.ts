import { UserServiceService } from './../service-user/user-service.service';
import { Router } from '@angular/router';
import { ServiceAuthService } from './../service-auth/service-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-edit-profile',
  templateUrl: './comp-edit-profile.component.html',
  styleUrls: ['./comp-edit-profile.component.css']
})
export class CompEditProfileComponent implements OnInit {

  user: any = {};
  email: string;
  password: string;

  showSpinner: boolean = false;
  emailErrorMessage: string = 'Invalid Email';
  emailError: boolean = false;

  passwordError: boolean = false;

  profileError: boolean = false;
  profileErrorMessage: string = 'Please enter all fields';

  otpError: boolean = false;

  otp: string;
  fetchedOTP: string;

  constructor(private serviceAuth: ServiceAuthService,
    private router: Router,
    private userService: UserServiceService) { }

  ngOnInit(): void {
    this.navigation();
    this.fetchUser();
    //subscribe to otp
    this.serviceAuth.otp.subscribe(res => {
      this.fetchedOTP = JSON.parse(res).otp;
    })
  }

  navigation() {
    if(!this.serviceAuth.isTokenPresent()) {
      this.router.navigate(['/login']);
      return;
    }

    const firstToken = localStorage.getItem('firstToken');
    if(!firstToken) {
      this.router.navigate(['/firstscreen']);
      return;
    }
  }

  enterName(event) {
    this.user.name = event.target.value;
  }
  enterUserName(event) {
    this.user.userName = event.target.value;
  }
  enterBio(event) {
    this.user.bio = event.target.value;
  }
  enterGender(event) {
    this.user.gender = event.target.value;
  }
  enterEmail(event) {
    this.email = event.target.value;
  }
  enterPassword(event) {
    this.password = event.target.value;
  }
  enterOTP(event) {
    this.otp = event.target.value;
  }

  fetchUser() {
    const user_json = localStorage.getItem('LambdaUser');
    this.user = JSON.parse(user_json);
    this.email = this.user.email;
  }

  update() {
    this.profileError = false;

    if(this.isValidated(this.user.userName)) {
      this.showSpinner = true;

      this.userService.update(this.user)
      .then(res => {
        localStorage.setItem('LambdaUser', JSON.stringify(this.user));
        this.showSpinner = false;
        this.profileError = false;

        this.router.navigate(['/profile/0']);
      })
      .catch(err => {
        this.showSpinner = false;
        this.profileError = true;
        this.profileErrorMessage = "Username already in use";
        console.log(err);
      })
    }
  }
  isValidated(value: String) {
    return value != null && !value.includes(" ") && value;
  }

  sendOTP() {
    this.serviceAuth.sendOTP(this.user);
  }

  saveEmail() {
    this.otpError = false;
    
    if(this.fetchedOTP == this.otp) {
      this.emailError = false;
      this.emailErrorMessage = 'Invalid Email';

      if(this.isValidated(this.email) && this.email.includes('@')) {
        this.userService.updateEmail(this.email, this.user._id)
        .then((res) => {
          console.log('Email updated');
          //logout current session
          this.serviceAuth.logout();
        }, err => {
          console.log(err);
          this.emailError = true;
          this.emailErrorMessage = 'Email already in use';
        })
      }
      else {
        this.emailError = true;
      }
    }
    else {
      this.otpError = true;
    }
  }

  changePassword() {
    this.passwordError = false;

    if(this.password != null && this.password) {
      this.userService.updatePassword(this.password)
      .then(res => {
        console.log('Password Updated');
        //logout current session
        this.serviceAuth.logout();
      }, err => {
        console.log(err);
        this.passwordError = true;
      })
    }
  }

}
