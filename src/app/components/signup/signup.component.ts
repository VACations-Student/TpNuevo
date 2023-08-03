import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  userObj: any = {
    email: "",
    password: ""
  };

  constructor(private router:Router, private auth:AuthService){}

  volverHome(){
    this.router.navigate(['']);
  }

  signUp(){
    if(this.userObj.username != '' && this.userObj.password != ''){
      this.auth.register(this.userObj.email, this.userObj.password)
    }
  }

  googleAuth(){
    this.auth.GoogleAuth()
  }

}
