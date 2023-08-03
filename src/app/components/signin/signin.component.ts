import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  userObj: any = {
    email: "",
    password: ""
  };

  constructor(private router:Router, private auth:AuthService){}

  volverHome(){
    this.router.navigate(['']);
  }

  signIn(){
    if(this.userObj.username != '' && this.userObj.password != ''){
      this.auth.login(this.userObj.email, this.userObj.password)
    }
  }

  googleAuth(){
    this.auth.GoogleAuth()
  }

}
