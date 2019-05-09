import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import { GstGetComponent } from './gst-get/gst-get.component';

import { CategoriaAddComponent } from './categoria-add/categoria-add.component';
import { CategoriaGetComponent } from './categoria-get/categoria-get.component';
import { CategoriaEditComponent } from './categoria-edit/categoria-edit.component';

const routes: Routes = [
  {
    path: 'business/create',
    component: GstAddComponent
  },
  {
    path: 'business/edit/:id',
    component: GstEditComponent
  },
  {
    path: 'business',
    component: GstGetComponent
  },
  {
    path: 'categoria/nova',
    component: CategoriaAddComponent
  },
  {
    path: 'categoria/edit/:id',
    component: CategoriaEditComponent
  },
  {
    path: 'categoria',
    component: CategoriaGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
