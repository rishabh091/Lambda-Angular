import { Router } from '@angular/router';
import { ServiceAuthService } from './../service-auth/service-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-first-screen',
  templateUrl: './comp-first-screen.component.html',
  styleUrls: ['./comp-first-screen.component.css']
})
export class CompFirstScreenComponent implements OnInit {

  constructor(private authService: ServiceAuthService, private router: Router) { }

  ngOnInit(): void {
    if(!this.authService.isTokenPresent()) {
      this.router.navigate(['/login']);
      return;
    }

    if(localStorage.getItem('firstToken')) {
      this.router.navigate(['']);
      return;
    }
  }

  skip() {
    localStorage.setItem('firstToken', "true");
    this.router.navigate(['']);
  }

}
