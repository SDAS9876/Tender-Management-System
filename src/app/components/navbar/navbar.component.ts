import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn : any;

  isAdmin : any;

  constructor(private authservice : AuthService) { 
    this.authservice.isLoggedIn.subscribe(value=>{
      this.isLoggedIn=value;
      console.log(this.isLoggedIn);
    })

    this.authservice.isAdmin.subscribe(value=>{
      this.isAdmin=value;
      console.log(this.isAdmin);
    })
  }

  ngOnInit(): void {
  }


}
