import { Injectable } from '@angular/core';
import { Peca } from './peca-model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { API } from '../app.api';

@Injectable()
export class PecaService {

  constructor(public http: HttpClient) { }

  inserir(peca: Peca){
    return this.http.post(
      `${API}/clientes`,
      peca,
      {
        observe: 'response',
        responseType: 'text'
      }
    ); 
  }

}
