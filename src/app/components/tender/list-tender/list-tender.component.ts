import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TenderService } from 'src/app/services/tender.service';

@Component({
  selector: 'app-list-tender',
  templateUrl: './list-tender.component.html',
  styleUrls: ['./list-tender.component.css'],
})
export class ListTenderComponent implements OnInit {
  tenders: any;

  constructor(
    private readonly tenderService: TenderService,
    private router: Router
  ) {
    this.tenders = this.tenderService.tenders;
  }

  ngOnInit(): void {}

  onDeleteClick(id: number) {
    console.log(id);
    this.tenders = this.tenderService.deleteTender(id);
  }

  onUpdateClick(id: number) {
    this.router.navigateByUrl(`/update-tender/${id}`);
  }
}
