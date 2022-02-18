import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TenderService {
  tenders = [
    {
      id: 1,
      type: 'abc',
      date: '12/15/2022',
      min: 123,
    },
    {
      id: 2,
      type: 'def',
      date: '12/16/2022',
      min: 123,
    },
    {
      id: 3,
      type: 'abc',
      date: '12/22/2022',
      min: 123,
    },
  ];

  constructor() {}

  getTender(id: number) {
    return this.tenders.filter((el) => el.id === id)[0] ?? null;
  }

  getTenders() {
    return this.tenders;
  }

  addTender(tender: any) {
    this.tenders.push(tender);
  }

  deleteTender(id: number) {
    this.tenders = this.tenders.filter((tender: any) => tender.id !== id);
    return this.tenders;
  }

  updateTender(tender: any) {
    const idx = this.tenders.findIndex((el) => el.id === tender.id);

    if (idx > -1) this.tenders[idx] = tender;

    return this.tenders;
  }
}
