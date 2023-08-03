import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private router:Router, private auth:AuthService){}
  
  irSignIn(){
    this.router.navigate(['signin'])
  }

  irSignUp(){
    this.router.navigate(['signup'])
  }

  irPersonas(){
    this.router.navigate(['personas'])
  }

  SignOut(){
    this.auth.logout()
  }

  userState(){
    this.auth.check()
  }

}
