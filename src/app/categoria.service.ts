import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  uri = 'http://localhost:9000/categorias';
  versionuri = 'http://localhost:9000/getversion';

  constructor(private http: HttpClient) { }

  addCategoria(descricao) {
    const obj = {
      descricao: descricao
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getCategorias() {
    return this.http.get(`${this.uri}`);
  }

  getVersion() {
    return this.http.get(`${this.versionuri}`);
  }

  editCategoria(id) {
     return this.http.get(`${this.uri}/${id}`);
    }

  updateCategoria(descricao, id) {

    const obj = {
      descricao: descricao
    };
    this.http.post(`${this.uri}/${id}`, obj)
      .subscribe(res => console.log('Atualizado'));
  }

 deleteCategoria(id) {
    return this.http.delete(`${this.uri}/${id}`);
  }
}
