import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { LoginComponent } from './login/login.component';

var config = {
  apiKey: "AIzaSyDY-hsuOdxUPn-WhIMX55-zJq-VOsRYClk",
  authDomain: "angular-login-f0d7e.firebaseapp.com",
  databaseURL: "https://angular-login-f0d7e.firebaseio.com",
  projectId: "angular-login-f0d7e",
  storageBucket: "angular-login-f0d7e.appspot.com",
  messagingSenderId: "1086809272234"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
