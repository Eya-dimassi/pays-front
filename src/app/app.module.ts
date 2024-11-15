import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaysComponent } from './pays/pays.component';
import { AddPaysComponent } from './add-pays/add-pays.component';
import { FormsModule } from '@angular/forms';
import { UpdatePaysComponent } from './update-pays/update-pays.component';
import { RechercheParClassificationComponent } from './recherche-par-classification/recherche-par-classification.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeClassificationComponent } from './liste-classification/liste-classification.component';
import { UpdateClassificationComponent } from './update-classification/update-classification.component';



@NgModule({
  declarations: [
    AppComponent,
    PaysComponent,
    AddPaysComponent,
    UpdatePaysComponent,
    RechercheParClassificationComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    LoginComponent,
    ForbiddenComponent,
    ListeClassificationComponent,
    UpdateClassificationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
