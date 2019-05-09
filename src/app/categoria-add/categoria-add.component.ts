import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria-add',
  templateUrl: './categoria-add.component.html',
  styleUrls: ['./categoria-add.component.css']
})
export class CategoriaAddComponent implements OnInit {

  angForm: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder, 
              private cat: CategoriaService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      descricao: ['', Validators.required ],
    });
  }

  addCategoria(objRequest) {
    this.cat.addCategoria(objRequest);
    this.router.navigate(['categoria']);
  }

  ngOnInit() {
  }

}
