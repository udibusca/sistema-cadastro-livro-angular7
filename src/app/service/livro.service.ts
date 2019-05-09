import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  uri = 'http://localhost:9000/livros';

  constructor(private http: HttpClient) { }

  addLivro(objRequest) {
    const obj = {
      isbn: objRequest.isbn,
      titulo: objRequest.titulo,
      autor: objRequest.autor,
      categoria: objRequest.categoria,
      editora:objRequest.editora
    };
    this.http.post(`${this.uri}`, obj)
        .subscribe(res => console.log('Inserido'));
  }

  getLivros() { 
    return this.http.get(`${this.uri}`);
  }

  editLivro(id) {
     return this.http.get(`${this.uri}/${id}`);
    }

  updateLivro(objRequest, id) {
    const obj = {
      codigo: id,
      isbn: objRequest.isbn,
      titulo: objRequest.titulo,
      autor: objRequest.autor,
      categoria: objRequest.categoria,
      editora:objRequest.editora
    };
    this.http.put(`${this.uri}`, obj)
      .subscribe(res => console.log('Atualizado'));
  }

 deleteLivro(id) {
    return this.http.delete(`${this.uri}/${id}`);
  }
}
