import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { AuthService } from './auth-service.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private _authService:AuthService, private _userService:UserService) {}

  canActivate(): Observable<boolean> { 
    return this._authService.appUser$
      .map(appUser => appUser.isAdmin);
  }

}
