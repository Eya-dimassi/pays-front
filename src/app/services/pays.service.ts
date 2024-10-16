import { Injectable } from '@angular/core';
import { Pays } from '../model/pays.model';
import { Classification } from '../model/classification.model';

@Injectable({
  providedIn: 'root'
})
export class PaysService {
  pays :Pays[];
  classifications:Classification[];

  constructor() {
    this.classifications=[
      {idClass:1,nomClass:"Developed"},
      {idClass:2,nomClass:"Developing"},
      {idClass:3,nomClass:"Emerging"}
    ];
    this.pays =[ 
      {idPays:1 , nomPays:"Tunisia", population:12.36 ,continent:"Africa",independenceDate:new Date("1956-03-20"),classification:{idClass:2,nomClass:"Developing"}},
      {idPays:2 , nomPays:"France", population:67.97 ,continent:"Europe",independenceDate:new Date("1789-07-14"), classification:{idClass:1,nomClass:"Developed"}},
      {idPays:3 , nomPays:"Algeria", population:44.9 ,continent:"Africa",independenceDate:new Date("1962-07-05"),classification:{idClass:2,nomClass:"Developing"}}
      
     ]
   }
   listePays(){
    return this.pays;

   }
   ajouterPays(p:Pays){
    this.pays.push(p);
   }
   supprimerPays(pays:Pays){
    const index =this.pays.indexOf(pays,0);
    if(index>-1){
      this.pays.splice(index,1);
    }
   }
   payst!:Pays;
  
   consulterPays(id:number): Pays{
    this.payst = this.pays.find(p => p.idPays == id)!;
    return this.payst;
}
trierPays(){
  this.pays = this.pays.sort((n1,n2) => {
  if (n1.idPays! > n2.idPays!) {
  return 1;
  }
  if (n1.idPays! < n2.idPays!) {
  return -1;
  }
  return 0;
  });
  }
  

updatePays(p:Pays)
{
// console.log(p);
this.supprimerPays(p);
this.ajouterPays(p);
this.trierPays();

}
listeClassification():Classification[] {
  return this.classifications;
  }
consulterClassification(id:number): Classification{
    return this.classifications.find(clas => clas.idClass == id)!;
    }






}
