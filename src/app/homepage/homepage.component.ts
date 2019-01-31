import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../auth/auth.service';
import { LoggedUser } from  '../models/loggedUser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  user: LoggedUser;

  constructor(private  authService:  AuthService) { 
    this.user = {
      metadata: {
        creationTime: null
      }
    }
  }

  ngOnInit() {
    let loggedUserData = this.authService.getUser();
    console.log(new Date(loggedUserData.user.createdAt))
    this.user = {
      metadata: {
        creationTime: new Date(parseInt(loggedUserData.user.createdAt))
      }
    }
  }

}
