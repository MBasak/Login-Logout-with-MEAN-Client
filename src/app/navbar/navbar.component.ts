import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
     this.authService.isUserLoggedIn().subscribe(result => this.isLogoutVisible = result);
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    
  }

  isLogoutVisible : boolean;

  

}
