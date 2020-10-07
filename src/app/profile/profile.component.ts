import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any =  {};
  constructor(private router: Router,
    private authService: AuthService) {

     }

  ngOnInit() {
    this.authService.getProfile().subscribe(result => {
      this.user.name = result.user.name;
      this.user.username =  result.user.username;
      this.user.email = result.user.email;
      console.log(result);
    },
    err => {
      console.log(err);
    })
  }

}
