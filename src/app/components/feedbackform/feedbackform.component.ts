import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.css']
})
export class FeedbackformComponent implements OnInit {

  registerForm = new FormGroup({
    id: new FormControl("", [
      Validators.required,
    ]),
    name: new FormControl("", [
      Validators.required,
    ]),
    Textarea: new FormControl(""),
  });


  ngOnInit(): void {
  }


  constructor() { }

  feedbackSubmit(event: any): void {
    event.preventDefault();
    if (this.registerForm.invalid) return;
    console.log(this.registerForm.value);
  }
}
