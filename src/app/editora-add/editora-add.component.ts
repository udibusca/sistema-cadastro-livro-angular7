import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EditoraService } from '../service/editora.service';

@Component({
  selector: 'app-editora-add',
  templateUrl: './editora-add.component.html',
  styleUrls: ['./editora-add.component.css']
})
export class EditoraAddComponent implements OnInit {

  angForm: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder, 
              private cat: EditoraService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      nome: ['', Validators.required ],
    });
  }

  addEditora(objRequest) {
    this.cat.addEditora(objRequest);
    this.router.navigate(['editora']);
  }

  ngOnInit() {
  }

}

