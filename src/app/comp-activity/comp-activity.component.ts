import { Router } from '@angular/router';
import { ServiceAuthService } from './../service-auth/service-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-activity',
  templateUrl: './comp-activity.component.html',
  styleUrls: ['./comp-activity.component.css']
})
export class CompActivityComponent implements OnInit {

  constructor(private serviceAuth: ServiceAuthService, private router: Router) { }

  ngOnInit(): void {
    this.navigation()
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

}
