import { Component, OnInit } from '@angular/core';
import { Pays } from '../model/pays.model';
import { PaysService } from '../services/pays.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrl: './pays.component.css'
})
export class PaysComponent implements OnInit {
  pays:Pays[]=[];
  constructor(private paysService:PaysService
    ,public authService: AuthService
  ){
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
