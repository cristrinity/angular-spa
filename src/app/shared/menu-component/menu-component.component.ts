import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.scss']
})
export class MenuComponentComponent implements OnInit {

menu;

  constructor() {
    this.menu = ['Mis negocios', 'Nuevo negocio']

  }

  ngOnInit() {
  }



}
