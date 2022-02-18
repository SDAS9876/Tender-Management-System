import {Component} from '@angular/core';

export interface TendorDetails {
  TenderId: number;
  TenderType: string;
  TenderDate: string;
  MinQuotes: number;
}

const ELEMENT_DATA: TendorDetails[] = [
  {TenderId: 1, TenderType: 'maintainence', TenderDate: "2019-07-19", MinQuotes: 50000},
  {TenderId: 2, TenderType: 'construction', TenderDate: "2019-09-14", MinQuotes: 100000},
  {TenderId: 3, TenderType: 'software',     TenderDate: "2019-07-19", MinQuotes: 20000}
];

/**
 * @title Basic use of `<table mat-table>`
 */
 @Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.css']
})

export class TenderComponent {
  displayedColumns: string[] = ['TenderId', 'TenderType', 'TenderDate', 'MinQuotes'];
  dataSource = ELEMENT_DATA;
}