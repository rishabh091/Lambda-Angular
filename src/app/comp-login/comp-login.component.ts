import { Router } from '@angular/router';
import { ServiceAuthService } from './../service-auth/service-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-login',
  templateUrl: './comp-login.component.html',
  styleUrls: ['./comp-login.component.css']
})
export class CompLoginComponent implements OnInit {

  user = {
    email: null,
    password: null
  }

  showError:boolean = false;
  showSpinner: boolean = false;
  password:String = 'password';

  constructor(private authService: ServiceAuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.authService.isTokenPresent()) {
      this.router.navigate(['']);
    }
  }

  enterEmail(event) {
    this.user.email = event.target.value;
  }
  enterPassword(event) {
    this.user.password = event.target.value;
  }

  showPassword() {
    if(this.password == 'password') {
      this.password = 'text';
    }
    else {
      this.password = 'password';
    }
  }

  login() {
    this.showError = false;
    this.showSpinner = true;

    if(this.user.email != null && this.user.password != null) {
      this.authService.login(this.user)
      .then((res:any) => {
        
        //save token to localStorage
        localStorage.setItem("token", res.token);

        this.showError = false;
        this.showSpinner = false;

        //navigate to home
        this.router.navigate(['']);
      })
      .catch((err) => {
        this.showError = true;
        this.showSpinner = false;
      })
    }
  }

}
