import { AngularFireStorage } from '@angular/fire/storage';
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

  passwordError: boolean = false;

  profileError: boolean = false;
  profileErrorMessage: string = 'Please enter all fields';

  otpError: boolean = false;

  otp: string;
  fetchedOTP: string;

  uploadMessage: string = 'Uploading';
  uploadCondition: boolean = false;

  constructor(private serviceAuth: ServiceAuthService,
    private router: Router,
    private userService: UserServiceService,
    private storage: AngularFireStorage) { }

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

  getBack() {
    history.go(-1);
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

      if(this.isValidated(this.email) && this.email.includes('@')) {
        this.userService.updateEmail(this.email, this.user._id)
        .then((res) => {
          console.log('Email updated');
          //logout current session
          this.serviceAuth.logout();
        }, err => {
          console.log(err);
        })
      }
      else {
        this.otpError = true;
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

  async selectPic(event) {
    this.uploadCondition = true;

    const image = event.target.files[0];
    const filePath = '/profile pictures/' + this.user.email;
    const fileRef = this.storage.ref(filePath);

    fileRef.put(image)
    .then((result) => {
      //give message
      this.uploadMessage = 'Upload Completed !!';
      location.reload();
    })
    .catch(err => {
      this.uploadMessage = 'Error in uploading Image';
      console.log(err);
    })

    let user = JSON.parse(localStorage.getItem('LambdaUser'));
    await fileRef.getDownloadURL().toPromise()
    .then(response => {
      console.log(response);
      user.profilePicture = response;
    })

    this.userService.update(user)
    .then(res => {
      localStorage.setItem('LambdaUser', JSON.stringify(user));
      console.table(user);
    })
    .catch(err => console.log(err))
  }

}
