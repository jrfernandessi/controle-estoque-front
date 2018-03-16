import { Component, OnInit, Input } from '@angular/core';
import { PecaService } from './peca.service';
import { Peca } from './peca-model';
import { Message } from 'primeng/components/common/api';



@Component({
  selector: 'app-peca',
  templateUrl: './peca.component.html',
  styleUrls: ['./peca.component.css']
})
export class PecaComponent implements OnInit {

  peca: Peca;
  msg: Message[] = []

  constructor(public service: PecaService) {
    this.peca = new Peca(0, '', 0)
   }

  ngOnInit() {
  }

  inserir(){
    this.service.inserir(this.peca)
      .subscribe(response=>{
        this.msg.push({ severity: 'success', summary: 'Sucesso', detail: 'Peça cadastrada com sucesso' });
      },
      error=>{
        this.msg.push({ severity: 'error', summary: 'Erro', detail: 'Peça com descrição já cadastrada' });
      });
  }

}
