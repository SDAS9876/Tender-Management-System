import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TenderService } from 'src/app/services/tender.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  tenderForm = new FormGroup({
    id: new FormControl(''),
    type: new FormControl(''),
    date: new FormControl(''),
    min: new FormControl(''),
  });

  constructor(private tenderService: TenderService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(event: any) {
    event.preventDefault();
    this.tenderForm
      .get('id')
      ?.setValue(parseInt(this.tenderForm.get('id')?.value));
    this.tenderService.addTender(this.tenderForm.value);
    this.router.navigateByUrl('/list-tenders');
  }
}
