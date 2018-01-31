import { Component } from '@angular/core';
import { AuthService } from './oram/service/auth-service.service';
import { Router } from '@angular/router';
import { UserService } from './oram/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor(
    private _authService:AuthService,
    router:Router,
    private _userService : UserService
  ){

    _authService.user$.subscribe(
      usr => {
        if(!usr) return;

        
          _userService.save(usr);          
          let returnUrl = localStorage.getItem('returnUrl');
          
          if(!returnUrl) return;

            localStorage.removeItem('returnUrl');
            router.navigateByUrl(returnUrl);
         
       
      })

  }

}
