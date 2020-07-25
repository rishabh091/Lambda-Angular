import { Router } from '@angular/router';
import { ServiceAuthService } from './../service-auth/service-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-explore',
  templateUrl: './comp-explore.component.html',
  styleUrls: ['./comp-explore.component.css']
})
export class CompExploreComponent implements OnInit {

  constructor(private serviceAuth: ServiceAuthService, private router: Router) { }

  ngOnInit(): void {
    this.navigation();
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
