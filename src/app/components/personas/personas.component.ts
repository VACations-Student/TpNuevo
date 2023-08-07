// personas.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/shared/auth.service';
import { Datos } from 'src/app/interfaces/datos';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  rows: Datos[];

  constructor(private http: HttpClient, private router: Router, private auth: AuthService) {
    this.rows = [];
  }

  volverHome() {
    this.router.navigate(['']);
  }

  getDatos() {
    if (this.auth.checkBool()) {
      this.http.get('https://apis.datos.gob.ar/series/api/series/?ids=ddaa_interior_015&format=json&metadata=none').subscribe(
        (response: any) => {
          console.log(response.data[0]);
          for (let i = 0; i < response.data.length; i++) { // Corrected typo from "lenght" to "length"
            let d: Datos = {
              "Date": response.data[i][0],
              "Value": response.data[i][1]
            };
            this.rows.push(d);
          }
          console.log(this.rows);
        },
        error => {
          console.log(error.message);
        }
      );
    } else {
      alert("Debes estar logeado para usar esta funcion.");
    }
  }
}

