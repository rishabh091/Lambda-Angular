import { Router } from '@angular/router';
import { ServiceAuthService } from './../service-auth/service-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-home',
  templateUrl: './comp-home.component.html',
  styleUrls: ['./comp-home.component.css']
})
export class CompHomeComponent implements OnInit {

  constructor(private serviceAuth: ServiceAuthService, private router: Router) { }

  ngOnInit(): void {
    if(!this.serviceAuth.isTokenPresent()) {
      this.router.navigate(['/login']);
    }
  }

}
