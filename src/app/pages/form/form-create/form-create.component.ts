import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';


@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.scss']
})
export class FormCreateComponent implements OnInit {

pais = [{
  key: 'España',
  value: '1'
},
{
  key: 'Portugal',
  value: '2',
},
{
  key: 'Francia',
  value: '3',
},
{
  key: 'Italia',
  value: '4'
}]

empresa = [
  {
      key: 'Pequeña',
      value: '1'
  },
  {
      key: 'Mediana',
      value: '2'
  },
  {
      key: 'Grande',
      value: '3'
  }
]

  myForm = this.fb.group({
    name: ['', Validators.required],
    createdAt: ['', Validators.required],
    company: ['', Validators.required],
    sizecompany: ['', Validators.required],
    address: ['', Validators.required],
    country: ['', Validators.required],
    phone: ['', Validators.required],
    description: ['', Validators.required],
  })


constructor(private fb: FormBuilder, private companyService: CompanyService) {
//console.log(Object.keys(this.empresa[3]), this.empresa[3], this.empresa[3][1])
}

public submit(){

    this.companyService.addCompany(this.myForm.value);

}
  ngOnInit() {
  }

}
