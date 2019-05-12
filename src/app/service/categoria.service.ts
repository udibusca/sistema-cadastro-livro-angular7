import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  uri = 'http://localhost:9000/categorias';

  constructor(private http: HttpClient) { }

  addCategoria(objRequest) {
    const obj = {
      descricao: objRequest.descricao
    };
    this.http.post(`${this.uri}`, obj)
        .subscribe(res => console.log('Inserido'));
  }

  getCategorias() {
    return this.http.get(`${this.uri}`);
  }

  editCategoria(id) {
     return this.http.get(`${this.uri}/${id}`);
    }

  updateCategoria(objRequest, id) {
    const obj = {
      idCategoria: id,
      descricao: objRequest.descricao
    };
    this.http.put(`${this.uri}`, obj)
      .subscribe(res => console.log('Atualizado'));
  }


  deleteCategoria(id) {
    return this.http.delete(`${this.uri}/${id}`)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    alert(error.error.errors[0]);
    return Promise.reject(error.error.errors[0]|| error);
  }
}
