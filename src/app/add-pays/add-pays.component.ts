import { Component, OnInit } from '@angular/core';
import { Pays } from '../model/pays.model';
import { PaysService } from '../services/pays.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pays',
  templateUrl: './add-pays.component.html',
  styleUrl: './add-pays.component.css'
})
export class AddPaysComponent implements OnInit {
  
  newPays = new Pays();
  constructor(private paysService:PaysService,
               private router:Router
  ){}
  addPays(){
    //console.log(this.newPays);
    this.paysService.ajouterPays(this.newPays);
    this.router.navigate(['pays']);
  }


  ngOnInit(): void {
    
  }

}
