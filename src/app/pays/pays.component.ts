import { Component, OnInit } from '@angular/core';
import { Pays } from '../model/pays.model';
import { PaysService } from '../services/pays.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  
})
export class PaysComponent implements OnInit {
  pays?:Pays[];
  constructor(private paysService:PaysService
              ,public authService: AuthService)
  {

  }
  ngOnInit(): void {
    this.chargerPays();
    
  }
  chargerPays(){
    this.paysService.listePays().subscribe(p => {
    console.log(p);
    this.pays = p;
    });
    }
  supprimerPays(p:Pays){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.paysService.supprimerPays(p.idPays).subscribe(() => {
     console.log("pays supprimé");
     this.chargerPays();
     });
    
  }



}
