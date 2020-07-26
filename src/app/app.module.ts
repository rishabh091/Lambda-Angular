import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CompHomeComponent } from './comp-home/comp-home.component';
import { CompLoginComponent } from './comp-login/comp-login.component';
import { CompSignupComponent } from './comp-signup/comp-signup.component';
import { CompOtpComponent } from './comp-otp/comp-otp.component';
import { CompFirstScreenComponent } from './comp-first-screen/comp-first-screen.component';
import { CompActivityComponent } from './comp-activity/comp-activity.component';
import { CompExploreComponent } from './comp-explore/comp-explore.component';
import { CompUserComponent } from './comp-user/comp-user.component';
import { CompNavbarComponent } from './comp-navbar/comp-navbar.component';
import { CompEditProfileComponent } from './comp-edit-profile/comp-edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CompHomeComponent,
    CompLoginComponent,
    CompSignupComponent,
    CompOtpComponent,
    CompFirstScreenComponent,
    CompActivityComponent,
    CompExploreComponent,
    CompUserComponent,
    CompNavbarComponent,
    CompEditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
