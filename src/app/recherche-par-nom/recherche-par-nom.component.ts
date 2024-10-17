import { Component } from '@angular/core';
import { PaysService } from '../services/pays.service';
import { Pays } from '../model/pays.model';
@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: ``
})
export class RechercheParNomComponent {
  allPays! : Pays[];
  pays!: Pays[]; 
  searchTerm!: string;
  constructor(private paysService: PaysService){}
ngOnInit(): void {

  this.paysService.listePays().subscribe((p: Pays[]) => {
  console.log(p);
   this.pays = p;
});
}
onKeyUp(filterText : string){
this.pays= this.allPays.filter(item =>
item.nomPays.toLowerCase().includes(filterText));
}


    

}
