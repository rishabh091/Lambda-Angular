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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
