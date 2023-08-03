import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {

  constructor(private router:Router, private auth:AuthService){}

  volverHome(){
    this.router.navigate(['']);
  }

  getDatos(){
    if(this.auth.checkBool()){
      this.auth.getSerieTiempo().subscribe((data) =>{
        console.log(data)
      })
    }
    else{
      alert("Debes estar logeado para usar esta funcion.")
    }
  }
}
