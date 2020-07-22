import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CompHomeComponent } from './comp-home/comp-home.component';
import { CompLoginComponent } from './comp-login/comp-login.component';
import { CompSignupComponent } from './comp-signup/comp-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    CompHomeComponent,
    CompLoginComponent,
    CompSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
