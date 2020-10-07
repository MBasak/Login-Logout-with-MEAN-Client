import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isVisible = false;
  incorrectAuthMessage: string = 'Incorrect credentials. Please check username/password';
 
  userAuthenticated: boolean = true;
  constructor(private router: Router,
    private authService: AuthService) { 
   
  }
  
  username: string;
  password: string;

  ngOnInit() {
    
    
  }

  onLogin() {
    const user = {
      username: this.username,
      password: this.password
    }

    const result = this.authService.getUser(user).subscribe(result => {
      console.log(result);

      if(result['success'])
      {
        this.authService.storeUser(result.token, result.user);
        this.router.navigate(['/dashboard']);
      }
      else{
        this.username = null;
        this.password = null;
        this.userAuthenticated = false;
      }
    
      
    })
  }
}
