import { AppUser } from '../models/app-user';
import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of'; 
import * as firebase from 'firebase'; 

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  
  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private _userService:UserService
    ) { 
    this.user$ = afAuth.authState
    console.log(this.user$);
  }

  

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    console.log('Click to service ');
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logOut(){
    this.afAuth.auth.signOut();
    console.log('Click to service logout ');
  }

  get appUser$() : Observable<AppUser> {
    return this.user$
      .switchMap(user => {
        if (user) return this._userService.get(user.uid);

        return Observable.of(null);
      });    
  }

}
