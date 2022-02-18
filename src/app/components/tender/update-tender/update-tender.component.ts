import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TenderService } from 'src/app/services/tender.service';

@Component({
  selector: 'app-update-tender',
  templateUrl: './update-tender.component.html',
  styleUrls: ['./update-tender.component.css'],
})
export class UpdateTenderComponent implements OnInit {
  tenderForm = new FormGroup({
    id: new FormControl(''),
    type: new FormControl(''),
    date: new FormControl(''),
    min: new FormControl(''),
  });

  constructor(
    private tenderService: TenderService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((param) => {
      const tenderId = parseInt(param['id']);
      const tender = this.tenderService.getTender(tenderId);

      if (tender) {
        this.tenderForm.get('id')?.setValue(tender.id);
        this.tenderForm.get('type')?.setValue(tender.type);
        this.tenderForm.get('date')?.setValue(tender.date);
        this.tenderForm.get('min')?.setValue(tender.min);
      } else {
        this.router.navigateByUrl('/list-tenders');
      }
    });
  }

  ngOnInit(): void {}

  onSubmit(event: any) {
    event.preventDefault();
    this.tenderForm
      .get('id')
      ?.setValue(parseInt(this.tenderForm.get('id')?.value));
    this.tenderService.updateTender(this.tenderForm.value);
    this.router.navigateByUrl('/list-tenders');
  }
}
