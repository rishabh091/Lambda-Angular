import { CompUserComponent } from './comp-user/comp-user.component';
import { CompActivityComponent } from './comp-activity/comp-activity.component';
import { CompExploreComponent } from './comp-explore/comp-explore.component';
import { CompFirstScreenComponent } from './comp-first-screen/comp-first-screen.component';
import { CompSignupComponent } from './comp-signup/comp-signup.component';
import { CompLoginComponent } from './comp-login/comp-login.component';
import { CompHomeComponent } from './comp-home/comp-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: CompHomeComponent
  },
  {
    path: 'login', component: CompLoginComponent
  },
  {
    path: 'signup', component: CompSignupComponent
  },
  {
    path: 'firstscreen', component: CompFirstScreenComponent
  },
  {
    path: 'search', component: CompExploreComponent
  },
  {
    path: 'activity', component: CompActivityComponent
  },
  {
    path: 'profile/:id', component: CompUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
