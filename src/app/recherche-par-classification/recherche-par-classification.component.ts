import { Component } from '@angular/core';
import { Pays } from '../model/pays.model';
import { PaysService } from '../services/pays.service';
import { Classification } from '../model/classification.model';

@Component({
  selector: 'app-recherche-par-classification',
  templateUrl: './recherche-par-classification.component.html',
  styles: ``
})
export class RechercheParClassificationComponent {
  pays:Pays[]=[] ;
  classifications:Classification[]=[];
  IdClass!:number;
  constructor(private paysService:PaysService){}
  ngOnInit(){
    this.classifications=this.paysService.listeClassification();
    this.pays=[];
  }
  onChange(){
    this.pays=
    this.paysService.rechercherParClassification(this.IdClass);

  }
  supprimerPays(p:Pays){
    let conf=confirm("Etes-vous sur ?");
    if(conf)
      this.paysService.supprimerPays(p);
    this.pays=this.paysService.rechercherParClassification(this.IdClass);
  }



}
