import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { DobValidator } from './validators/dob-validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  registerForm = new FormGroup({
    firstName: new FormControl('ajbxj', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    lastName: new FormControl('ahs', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    dob: new FormControl('', [Validators.required, this.dobValidator.validate]),
    gender: new FormControl('female'),
    contactNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    category: new FormControl('PWD Contractor'),
    password: new FormControl('ahvjvh', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(
    private dobValidator: DobValidator,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  registerFormSubmit(event: any): void {
    event.preventDefault();
    if (this.registerForm.invalid) return;

    console.log(this.registerForm.value);
    this.authService.getProducts().subscribe({
      next: (value) => {
        console.log(value);
      },

      error: (error) => {
        console.log(error);
      },

      complete: () => {
        console.log('completed');
      },
    });
  }

  getErrors(control: any) {
    return control.invalid && control.touched;
  }
}
