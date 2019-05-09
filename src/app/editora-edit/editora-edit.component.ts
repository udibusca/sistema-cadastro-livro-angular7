import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EditoraService } from '../service/editora.service';

@Component({
  selector: 'app-editora-edit',
  templateUrl: './editora-edit.component.html',
  styleUrls: ['./editora-edit.component.css']
})
export class EditoraEditComponent implements OnInit {

  angForm: FormGroup;
  editora: any = {};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cat: EditoraService,
              private fb: FormBuilder) {
                this.createForm();
              }

  createForm() {
    this.angForm = this.fb.group({
       idEditora: ['', Validators.required ],
         nome: ['', Validators.required ]
      });
    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.cat.editEditora(params['id']).subscribe(res => {
          this.editora = res;
        });
      });
    }

    updateEditora(editora) {
     this.route.params.subscribe(params => {
      this.cat.updateEditora(editora, params['id']);
      this.router.navigate(['editora']);
   });
   }
}
