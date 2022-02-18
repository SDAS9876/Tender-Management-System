import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContractorService } from 'src/app/services/contractor.service';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.css']
})
export class ContractorComponent implements OnInit {

  contractors : any;
  filteredContractors : any;
  selectedContractor: any;

  searchForm = new FormGroup({
    term : new FormControl("all"),
  })


  constructor(private contractorservice: ContractorService) { }



  ngOnInit(): void {
    this.contractorservice.getAllUsers().subscribe(value=>{
      console.log(value)
      this.contractors = value;
      this.filteredContractors = value;
    })
  }

  
  toSearch(event: any): void {
    event.preventDefault();
    this.selectedContractor = null;
    console.log(this.searchForm.value.term.trim().toLowerCase() == this.contractors[0].category.trim().toLowerCase())
    if (this.searchForm.value.term === "all"){
      this.filteredContractors = this.contractors
      return
    }
    this.filteredContractors = this.contractors.filter((contractor: any) => contractor.category.trim().toLowerCase() == this.searchForm.value.term.trim().toLowerCase())

  }

  getContractorDetails(idx: number){
    this.selectedContractor = this.filteredContractors[idx]
  }

}
