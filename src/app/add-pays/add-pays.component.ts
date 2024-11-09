import { Component, OnInit } from '@angular/core';
import { Pays } from '../model/pays.model';
import { PaysService } from '../services/pays.service';
import { Router } from '@angular/router';
import { Classification } from '../model/classification.model';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';

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
  myForm!:FormGroup;
  constructor(private paysService:PaysService,
               private router:Router,
               private formBuilder:FormBuilder){}
  addPays(){
    if (this.myForm.valid) {
    this.newPays.email = this.myForm.controls['email'].value;
    this.newClassifiction=this.paysService.consulterClassification(this.newIdClass);
    this.newPays.classification=this.newClassifiction;
    this.paysService.ajouterPays(this.newPays);
    this.router.navigate(['pays']);
    }
    
  }


  ngOnInit() {
    this.classifications=this.paysService.listeClassification();
    this.myForm=this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.minLength(5)]],
      idPays:['', [Validators.required]],
      nomPays:['', [Validators.required]],
      population:['', [Validators.required]],
      continent:['', [Validators.required]],
      independenceDate:['', [Validators.required]],
      classifications:['', [Validators.required]],
  
    })
    
  }

}
