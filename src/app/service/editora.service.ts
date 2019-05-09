import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditoraService {

  uri = 'http://localhost:9000/editoras';

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
    return this.http.delete(`${this.uri}/${id}`);
  }
}
