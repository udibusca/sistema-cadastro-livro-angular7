import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit {

  angForm: FormGroup;
  categoria: any = {};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cat: CategoriaService,
              private fb: FormBuilder) {
                this.createForm();
              }

  createForm() {
    this.angForm = this.fb.group({
       idCategoria: ['', Validators.required ],
         descricao: ['', Validators.required ]
      });
    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.cat.editCategoria(params['id']).subscribe(res => {
          this.categoria = res;
        });
      });
    }

    updateCategoria(categoria) {
     this.route.params.subscribe(params => {
      this.cat.updateCategoria(categoria, params['id']);
      this.router.navigate(['categoria']);
   });
   }

}
