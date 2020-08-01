import { Router } from '@angular/router';
import { ServiceAuthService } from './../service-auth/service-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-explore',
  templateUrl: './comp-explore.component.html',
  styleUrls: ['./comp-explore.component.css']
})
export class CompExploreComponent implements OnInit {

  previousCat = null;
  currentCat = 'posts';

  posts = [1,2,3,4,5,6,7,8,9,10,11,12,3,4,5,1,2,3,4,5,6,7];
  people = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5];
  questions = [1,2,3,4,5,6,7,8,9,10,11,12,3,4,5,1,2,3,4,5,6,7];
  projects = [1,2,3,4,5,6,7,8,8,1,1,1,1,1,1,1];

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

  selectCat(id) {
    this.previousCat = this.currentCat;
    this.currentCat = id;

    const previous = document.getElementById(this.previousCat);
    previous.classList.remove('badge-success');
    previous.classList.add('badge-secondary');

    const current = document.getElementById(this.currentCat);
    current.classList.remove('badge-secondary');
    current.classList.add('badge-success');
  }

}
