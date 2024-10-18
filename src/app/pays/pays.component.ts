import { Component, OnInit } from '@angular/core';
import { Pays } from '../model/pays.model';
import { PaysService } from '../services/pays.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrl: './pays.component.css'
})
export class PaysComponent implements OnInit {
  pays:Pays[]=[];
  constructor(private paysService:PaysService){
   this.pays=paysService.listePays();  
  }
  ngOnInit(): void {
    
  }
  supprimerPays(p:Pays){
    let conf=confirm("Etes-vous sur ?");
    if(conf)
      this.paysService.supprimerPays(p);
  }



}
