import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaysComponent } from './pays/pays.component';
import { AddPaysComponent } from './add-pays/add-pays.component';
import { UpdatePaysComponent } from './update-pays/update-pays.component';
import { RechercheParClassificationComponent } from './recherche-par-classification/recherche-par-classification.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

const routes: Routes = [
  {path:"pays",component:PaysComponent},
  {path:"add-pays",component:AddPaysComponent},
  {path:"",redirectTo:"pays",pathMatch:"full"},
  {path:"updatePays/:id", component: UpdatePaysComponent},
  {path:"rechercheParClassification", component : RechercheParClassificationComponent},
  {path : "rechercheParNom", component : RechercheParNomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
