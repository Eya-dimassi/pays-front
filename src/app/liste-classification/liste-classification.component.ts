import { Component, OnInit } from '@angular/core';
import { Classification } from '../model/classification.model';
import { PaysService } from '../services/pays.service';

@Component({
  selector: 'app-liste-classification',
  templateUrl: './liste-classification.component.html',
  styles: ``
})
export class ListeClassificationComponent implements OnInit {
 classifications! : Classification[];
 ajout:boolean=true;

 updatedClass:Classification = {"idClass":0,"nomClass":""};

  constructor(private paysService : PaysService) { }

  ngOnInit(): void {
    /*this.classifications=this.paysService.listeClassification();
    console.log(this.classifications);*/
    this.chargerClassification();
   }
  classUpdated(clas: Classification): void {
    console.log("Class updated event", clas);
    this.paysService.ajouterClassification(clas); // Ensure this method correctly handles in-memory data
    this.chargerClassification();
    /*console.log("Clas updated event", clas);
    this.paysService.updateClassification(clas);
     
    //this.chargerClassification();  
    this.updatedClass = { idClass: 0, nomClass: '' }; */
               
  }
  chargerClassification(): void {
    this.classifications = this.paysService.listeClassification();  // Directly get categories from in-memory data
    console.log(this.classifications);
  }
  updateClass(clas: Classification){
    this.updatedClass=clas;
    this.ajout=false; 

  }
  
  



}

