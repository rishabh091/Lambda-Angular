import { Router } from '@angular/router';
import { ServiceAuthService } from './../service-auth/service-auth.service';
import { UserServiceService } from './../service-user/user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-user',
  templateUrl: './comp-user.component.html',
  styleUrls: ['./comp-user.component.css']
})
export class CompUserComponent implements OnInit {

  user: any = {};

  constructor(private userService: UserServiceService,
     private serviceAuth: ServiceAuthService,
     private router: Router) { }

  ngOnInit(): void {
    this.navigation();
    this.masterFunc();
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

  async masterFunc() {
    this.getUser();
  }

  getUser() {
    const id = location.pathname.split('/')[2];

    const user = localStorage.getItem('LambdaUser');

    if(user) {
      this.user = JSON.parse(user);
      return;
    }

    this.userService.getUser(id)
    .then(res => {
      this.user = res;
      //add user to localstorage
      localStorage.setItem('LambdaUser', JSON.stringify(this.user));
      console.table(this.user);
    })
    .catch(err => alert(err))
  }

}
