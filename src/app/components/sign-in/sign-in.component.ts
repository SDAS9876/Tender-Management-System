import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authservice : AuthService) { }

  ngOnInit(): void {
  }
  loginForm=new FormGroup({
    userId:new FormControl(""),
    password:new FormControl("")
  })

  loginFormSubmit(event:any){
    event.preventDefault();
    console.log(this.loginForm.value);
    this.authservice.signIn();
  }
}
