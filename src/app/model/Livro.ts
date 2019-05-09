import Categoria from './Categoria';
import Editora from './Editora';

export default class Livro {
  codigo: String;
  isbn: String;
  titulo: String;
  autor: String;

  categoria: Categoria;
  editora: Editora;

}
