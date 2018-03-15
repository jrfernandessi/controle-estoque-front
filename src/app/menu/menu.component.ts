import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  itens: any;
  ngOnInit() {
    this.itens = [
      {
        label:'Salvar'
      }
    ];
  }

}
