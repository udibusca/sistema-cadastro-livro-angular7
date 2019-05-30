import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppComponent } from './app.component';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstGetComponent } from './gst-get/gst-get.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';

import { BusinessService } from './service/business.service';
import { CategoriaService } from './service/categoria.service';
import { EditoraService } from './service/editora.service';
//import { LivroService } from './service/livro.service';
import { CategoriaAddComponent } from './categoria-add/categoria-add.component';
import { CategoriaGetComponent } from './categoria-get/categoria-get.component';
import { CategoriaEditComponent } from './categoria-edit/categoria-edit.component';
import { EditoraAddComponent } from './editora-add/editora-add.component';
import { EditoraGetComponent } from './editora-get/editora-get.component';
import { EditoraEditComponent } from './editora-edit/editora-edit.component';
import { LivroAddComponent } from './livro-add/livro-add.component';
import { LivroGetComponent } from './livro-get/livro-get.component';
import { LivroEditComponent } from './livro-edit/livro-edit.component';
import { LoginComponent } from './login/login.component';
import { LoginServiceService } from './login-service.service';

import { AuthGuard } from './login-guard';

@NgModule({
  declarations: [
    AppComponent,
    GstAddComponent,
    GstGetComponent,
    GstEditComponent,
    CategoriaAddComponent,
    CategoriaGetComponent,
    CategoriaEditComponent,
    EditoraAddComponent,
    EditoraGetComponent,
    EditoraEditComponent,
    LivroAddComponent,
    LivroGetComponent,
    LivroEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ BusinessService,
               CategoriaService,
               EditoraService,
               //LivroService
               LoginServiceService,
               AuthGuard
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
