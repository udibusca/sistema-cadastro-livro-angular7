import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class EditoraService {

  uri = 'http://localhost:9000/editoras';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  addEditora(objRequest) {
    const obj = {
      nome: objRequest.nome
    };
    this.http.post(`${this.uri}`, obj)
        .subscribe(res => console.log('Inserido'));
  }

  getEditoras() { 
    return this.http.get(`${this.uri}`);
  }

  editEditora(id) {
     return this.http.get(`${this.uri}/${id}`);
    }

  updateEditora(objRequest, id) {
    const obj = {
      idEditora: id,
      nome: objRequest.nome
    };
    this.http.put(`${this.uri}`, obj)
      .subscribe(res => console.log('Atualizado'));
  }

 deleteEditora(id) {
    return this.http.delete(`${this.uri}/${id}`)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    alert(error.error.errors[0]);
    return Promise.reject(error.error.errors[0]|| error);
  }
}
