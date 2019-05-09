import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import { GstGetComponent } from './gst-get/gst-get.component';

import { CategoriaAddComponent } from './categoria-add/categoria-add.component';
import { CategoriaGetComponent } from './categoria-get/categoria-get.component';
import { CategoriaEditComponent } from './categoria-edit/categoria-edit.component';
import { EditoraAddComponent } from './editora-add/editora-add.component';
import { EditoraGetComponent } from './editora-get/editora-get.component';
import { EditoraEditComponent } from './editora-edit/editora-edit.component';
import { LivroAddComponent } from './livro-add/livro-add.component';
import { LivroGetComponent } from './livro-get/livro-get.component';
import { LivroEditComponent } from './livro-edit/livro-edit.component';

const routes: Routes = [
  {path: 'business/create',component: GstAddComponent},
  {path: 'business/edit/:id',component: GstEditComponent},
  {path: 'business',component: GstGetComponent},

  {path: 'categoria/nova',component: CategoriaAddComponent},
  {path: 'categoria/edit/:id',component: CategoriaEditComponent},
  {path: 'categoria',component: CategoriaGetComponent},

  {path: 'editora/nova',component: EditoraAddComponent},
  {path: 'editora/edit/:id',component: EditoraEditComponent},
  {path: 'editora',component: EditoraGetComponent},

  {path: 'livro/nova',component: LivroAddComponent},
  {path: 'livro/edit/:id',component: LivroEditComponent},
  {path: 'livro',component: LivroGetComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
