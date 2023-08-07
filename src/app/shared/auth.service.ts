import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, signOut, user, onAuthStateChanged} from '@angular/fire/auth';
import { Firestore, collection, collectionData, addDoc, deleteDoc, getDoc, docData, setDoc } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { doc } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : Auth, private router : Router, private firestore : Firestore, private http : HttpClient) {}

  login(email : string, password : string) {
     return signInWithEmailAndPassword(this.fireauth, email,password).then( () => {
      this.router.navigate([''])
    }, err => {
      alert(err.message);
      this.router.navigate(['signin'])
    })
  }

  register(email : string, password : string){
    return createUserWithEmailAndPassword(this.fireauth, email,password).then( () => {
    alert('Registration Succesful')
      this.router.navigate([''])
    }, err => {
      alert(err.message)
      this.router.navigate(['signup'])
    })
  }

  logout() {
    signOut(this.fireauth).then( () =>{
      onAuthStateChanged(this.fireauth, (user) => {
        if (!user) {
          console.log("Funca")
          this.router.navigate(['']);
        }
      });
    }, err => {
      console.log("No funca")
      alert(err.message)
    })
  }

  GoogleAuth() {
    this.router.navigate([''])
    return signInWithPopup(this.fireauth, new GoogleAuthProvider());
  }

  check(){
    if(this.fireauth.currentUser != undefined){
      alert("Estas logeado.")
    }else{
      alert("No estas logeado.")
    }
  }
  checkBool(){
    if(this.fireauth.currentUser != undefined){
      return true
    }else{
      return false
    }
  }
}