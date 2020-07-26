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

  showSpinner: boolean = false;

  constructor(private serviceAuth: ServiceAuthService,
    private router: Router,
    private userService: UserServiceService) { }

  ngOnInit(): void {
    this.navigation();
    this.fetchUser();
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

  fetchUser() {
    const user_json = localStorage.getItem('LambdaUser');
    this.user = JSON.parse(user_json);
  }

  update() {
    if(this.isValidated(this.user.userName)
    && this.isValidated(this.user.gender)) {

      this.showSpinner = true;

      this.userService.update(this.user)
      .then(res => {
        localStorage.setItem('LambdaUser', JSON.stringify(this.user));
        this.showSpinner = false;

        this.router.navigate(['/profile/0']);
      })
      .catch(err => {
        this.showSpinner = false;
        console.log(err);
      })
    }
  }
  isValidated(value: String) {
    return value != null && !value.includes(" ") && value;
  }

}
