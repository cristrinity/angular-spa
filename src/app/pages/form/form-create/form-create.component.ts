import { Component, OnInit } from '@angular/core';

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
constructor() {
//console.log(Object.keys(this.empresa[3]), this.empresa[3], this.empresa[3][1])
}
  ngOnInit() {
  }

}
