import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs'

import { modelos } from '../models/type'
import {  } from '../components/header/header.component'

@Injectable({
  providedIn: 'root'
})

export class RestService {

  private url: string='http://localhost:8766'
  
  public emitEvent=new EventEmitter()

  constructor(private http: HttpClient) { }
  
  public getAllItens(): Observable<Array<modelos>>{

    return this.http.get<Array<modelos>>(`${this.url}/loja/itens`).pipe(
       response=>response,
       error=>error
    )
  }

  public getItensBySearchPiece(params: string): Observable<Array<modelos>>{

    return this.http
              .get<Array<modelos>>(`${this.url}/loja/item/barra-de-busca/peca/busca?peca=${params}`)
              .pipe(
                response=>response,
                error=>error
              )

  }
}
