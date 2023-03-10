import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter, Input } from '@angular/core';

import { Observable } from 'rxjs'

import { modelos, cliente } from '../models/type'

@Injectable({
  providedIn: 'root'
})

export class RestService {

  private url: string='http://localhost:8766'
  
  public emitEvent=new EventEmitter()

  constructor(private http: HttpClient) {}

  public logOut(): void{
    localStorage.removeItem('access_token')
  }

  public isAuthenticated(): boolean{
    const token=localStorage.getItem('access_token')

    if(!token) return false
    return true
  }

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

  public saveClientData(nome: string, email: string): Observable<cliente>{

    return this.http
               .post<cliente>(`${this.url}/loja/salvar-dados-do-cliente`, {nome, email})
               .pipe(response=>response,
                error=>error
               )
  }
}
