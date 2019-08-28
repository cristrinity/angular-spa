import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';


@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.scss']
})

export class FormTableComponent implements OnInit {
companies;
  constructor(private companyservice: CompanyService) {
    // fetch('http://5d5e6efc2441510014fc81e8.mockapi.io/api/company').then( data => data.json())
    // .then(data => {
    //   this.companies = data;
    //   //repr(this.companies);
    // })
   this.companyservice.listado().then( data => {
     this.companies = data;
     console.log(this.companies);
   });

  }

  ngOnInit() {

  }
}
