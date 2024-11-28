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




   chargerClassification(): void {
    this.paysService.listeClassification().
    subscribe(clas => {this.classifications = clas._embedded.classifications;
      console.log(clas);
      });
   }



  classUpdated(clas: Classification) {

    if (this.ajout) {


    console.log("classification reçue du composant updateClass ",clas);
    this.paysService.ajouterClassification(clas).subscribe( ()=> this.chargerClassification());
    }
   /* console.log("Class updated event", clas);
    this.paysService.ajouterClassification(clas);
    const index=this.classifications.findIndex(c => c.idClass === clas.idClass)
    
    this.chargerClassification();
    this.ajout = true;*/
    /*console.log("Clas updated event", clas);
    this.paysService.updateClassification(clas);
     
    //this.chargerClassification();  
    this.updatedClass = { idClass: 0, nomClass: '' }; */
               
  }
  
  updateClass(clas: Classification){
    this.updatedClass=clas;
    this.ajout=false; 

  }
  
  



}

