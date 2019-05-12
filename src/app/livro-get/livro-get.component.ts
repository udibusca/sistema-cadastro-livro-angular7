import { Component, OnInit } from '@angular/core';
import Livro from '../model/Livro';
import { LivroService } from '../service/livro.service';


@Component({
  selector: 'app-livro-get',
  templateUrl: './livro-get.component.html',
  styleUrls: ['./livro-get.component.css']
})
export class LivroGetComponent implements OnInit {

  livros: Livro[];

  constructor(private cat: LivroService) { }

  ngOnInit() {
    this.cat.getLivros().subscribe((data: Livro[]) => {
      this.livros = data;
  });
  }

  deleteLivro(id) {
    this.cat.deleteLivro(id).subscribe(res => {
      this.cat.getLivros().subscribe((data: Livro[]) => {
        this.livros = data;
    });
    });
  }
  
}
