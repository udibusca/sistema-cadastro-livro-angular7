import { Component, OnInit } from '@angular/core';
import Editora from '../model/Editora';
import { EditoraService } from '../service/editora.service';

@Component({
  selector: 'app-editora-get',
  templateUrl: './editora-get.component.html',
  styleUrls: ['./editora-get.component.css']
})
export class EditoraGetComponent implements OnInit {

  editoras: Editora[];

  constructor(private cat: EditoraService) { }

  ngOnInit() {
    this.cat.getEditoras().subscribe((data: Editora[]) => {
      this.editoras = data;
  });
  }

  deleteEditora(id) {
    this.cat.deleteEditora(id).subscribe(res => {
      this.cat.getEditoras().subscribe((data: Editora[]) => {
        this.editoras = data;
    });;
    });
  }
}

