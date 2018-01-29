
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase'; 

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  
  constructor(private afAuth: AngularFireAuth) { 
    this.user$ = afAuth.authState
    console.log(this.user$);
  }

  

  login(){
    console.log('Click to service ');
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logOut(){
    this.afAuth.auth.signOut();
    console.log('Click to service logout ');
  }
}
