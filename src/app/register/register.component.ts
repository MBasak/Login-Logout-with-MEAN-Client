import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { AuthService } from '../auth.service';
import { User } from '../models/user';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnChanges {

  name: string;
  username: string;
  password: string;
  email: string;
  validationMessage: string;
  successfulRegistration = 'You have been registered successfully';
  isSuccessfulRegistration : boolean = false;
  constructor(private validateService: ValidateService,
    private authService: AuthService,
    private router : Router) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit() {
  }

  onRegisterSubmit() {
    this.validationMessage = '';
    const user = {
      name: this.name,
      password: this.password,
      email: this.email,
      username: this.username
    } as User;

    this.validationMessage = this.validateService.validateUser(user)

    if (this.validationMessage === '') {
     this.authService.registerUser(user).subscribe(
       result => 
      
      {
       const success = result['success'];
       if(success)
       {
         setTimeout(() => this.isSuccessfulRegistration = true, 2000);
         this.router.navigate(['/login']);
       }
       else{
         this.validationMessage = 'Failed to register user';
       }
      }
     )
      
    }

  }

}
