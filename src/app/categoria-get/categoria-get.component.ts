import { Component, OnInit } from '@angular/core';
import Categoria from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria-get',
  templateUrl: './categoria-get.component.html',
  styleUrls: ['./categoria-get.component.css']
})
export class CategoriaGetComponent implements OnInit {

  categorias: Categoria[];

  constructor(private cat: CategoriaService) { }

  ngOnInit() {
    this.cat.getCategorias().subscribe((data: Categoria[]) => {
      this.categorias = data;
  });
  }

  deleteCategoria(id) {
    this.cat.deleteCategoria(id).subscribe(res => {
      this.cat.getCategorias().subscribe((data: Categoria[]) => {
        this.categorias = data;
    });;
    });
  }

}
