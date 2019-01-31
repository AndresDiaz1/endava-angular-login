import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFireAuth } from  "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) {}

  login (email:  string, password:  string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(user => {
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['homepage']);
      console.log('Success!', user);
    }).catch(err => {
      localStorage.setItem('user', null);
      alert(err);
      console.log('err', err);
    })
  }

  logout(){
    this.afAuth.auth.signOut();
    localStorage.removeItem('user');
  }

  getUser() {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user;
  }
}
