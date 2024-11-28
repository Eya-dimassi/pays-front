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


  ngOnInit() : void  {
    this.paysService.listeClassification().subscribe({
      next:
      (clas )=>{ this.classifications = clas._embedded.classifications;},
      error:(err)=>{
        console.error('Erreur ',err);},
     // console.log(clas);
      });
    
    this.myForm=this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.minLength(5)]],
      nomPays:['', [Validators.required]],
      population:['', [Validators.required]],
      continent:['', [Validators.required]],
      independenceDate:['', [Validators.required]],
      idClass:['', [Validators.required]],
  
    });
    
  }
  
  /*addPays() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);  // Check the values
      this.newPays.classification = this.classifications.find(
        (clas) => clas.idClass == this.newIdClass
      )!;
      this.newPays.email = this.myForm.controls['email'].value;
      this.paysService.ajouterPays(this.newPays).subscribe((p) => {
        console.log(p);
        this.router.navigate(['pays']);
      });
    }
  }
  */
  
  addPays(){
    if (this.myForm.valid) {
      this.newPays.email = this.myForm.controls['email'].value;
      this.newPays.classification = this.classifications.find(clas => clas.idClass == this.newIdClass)!;}
      this.paysService.ajouterPays(this.newPays).subscribe(p => {
        console.log(p);
        this.router.navigate(['pays']);
    });
    
  
}


}
