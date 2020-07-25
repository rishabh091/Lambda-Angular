import { Router } from '@angular/router';
import { ServiceAuthService } from './../service-auth/service-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-home',
  templateUrl: './comp-home.component.html',
  styleUrls: ['./comp-home.component.css']
})
export class CompHomeComponent implements OnInit {

  prevIcon: string = null;

  constructor(private serviceAuth: ServiceAuthService, private router: Router) { }

  ngOnInit(): void {
    this.navigation();
    this.alterIcon('home');
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

  home(id) {
    this.alterIcon(id);
  }
  
  search(id) {
    this.alterIcon(id);
  }

  activity(id) {
    this.alterIcon(id);
  }

  profile(id) {
    this.alterIcon(id);
  }
  alterIcon(id) {
    if(this.prevIcon) {
      document.getElementById(this.prevIcon).style.color = '#333333';
    }

    document.getElementById(id).style.color = 'black';
    this.prevIcon = id;
  }

}
