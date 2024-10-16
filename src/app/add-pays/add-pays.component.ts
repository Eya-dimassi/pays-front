import { Component, OnInit } from '@angular/core';
import { Pays } from '../model/pays.model';
import { PaysService } from '../services/pays.service';
import { Router } from '@angular/router';
import { Classification } from '../model/classification.model';

@Component({
  selector: 'app-add-pays',
  templateUrl: './add-pays.component.html',
  styleUrl: './add-pays.component.css'
})
export class AddPaysComponent implements OnInit {
  
  newPays = new Pays();
  classifications!:Classification[];
  newIdClass!:number;
  newClassifiction!:Classification;
  constructor(private paysService:PaysService,
               private router:Router
  ){}
  addPays(){
    this.newClassifiction=this.paysService.consulterClassification(this.newIdClass);
    this.newPays.classification=this.newClassifiction;
    this.paysService.ajouterPays(this.newPays);
    this.router.navigate(['pays']);
  }


  ngOnInit() {
    this.classifications=this.paysService.listeClassification();
    
  }

}
