import { Router } from '@angular/router';
import { ServiceAuthService } from './../service-auth/service-auth.service';
import { UserServiceService } from './../service-user/user-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-comp-user',
  templateUrl: './comp-user.component.html',
  styleUrls: ['./comp-user.component.css']
})
export class CompUserComponent implements OnInit {

  user: any = {};

  title = 'cloudStorage';
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;

  constructor(private userService: UserServiceService,
     private serviceAuth: ServiceAuthService,
     private router: Router,
     private storage: AngularFireStorage) { }

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

  logout() {
    this.serviceAuth.logout();
  }

  selectPic(event) {
    const date = Date.now();
    const image = event.target.files[0];
    const filePath = '/profile pictures/' + this.user.email + date;
    const fileRef = this.storage.ref(filePath);

    const task = fileRef.put(image)
    .then((result) => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    })
  }

}
