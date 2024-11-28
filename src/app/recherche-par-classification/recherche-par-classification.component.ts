import { Component, OnInit } from '@angular/core';
import { Pays } from '../model/pays.model';
import { PaysService } from '../services/pays.service';
import { Classification } from '../model/classification.model';

@Component({
  selector: 'app-recherche-par-classification',
  templateUrl: './recherche-par-classification.component.html',
  styles: ``
})
export class RechercheParClassificationComponent implements OnInit {
  pays!:Pays[] ;
  classifications!:Classification[];
  IdClass!:number;

  constructor(private paysService:PaysService){}

  ngOnInit(): void{
    this.paysService.listeClassification(). subscribe(clas => {this.classifications = clas._embedded.classifications;
      console.log(clas);
    });

  
  }
  onChange(){
   
    this.paysService.rechercherParClassification(this.IdClass).
    subscribe(p =>{this.pays=p});

  }
  /*supprimerPays(p:Pays){
    let conf=confirm("Etes-vous sur ?");
    if(conf)
      this.paysService.supprimerPays(p);
    this.pays=this.paysService.rechercherParClassification(this.IdClass);
  }*/



}
