import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateUser(user: User) : string {
    
    if(user.name === undefined ||
      user.email === undefined ||
      user.password === undefined ||
      user.username === undefined) {
        return 'Please fill out all fields';
      }

      if(user.password.length < 8)
      {
        return 'Password should be a minimum of 8 characters';
      }

      return '';
  }
}
