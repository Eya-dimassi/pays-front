import { Component, OnInit } from '@angular/core';
import { Pays } from '../model/pays.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PaysService } from '../services/pays.service';
import { Classification } from '../model/classification.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-pays',
  templateUrl: './update-pays.component.html',
})
export class UpdatePaysComponent implements OnInit{
  currentPays = new Pays();
  classifications!:Classification[];
  updateClassId!:number;
  myForm!:FormGroup;
constructor(private activatedRoute: ActivatedRoute,
            private paysService: PaysService,
            private router:Router,
            private formBuilder:FormBuilder) { }
ngOnInit():void {
  this.classifications=this.paysService.listeClassification();

this.currentPays = this.paysService.consulterPays(this.activatedRoute.snapshot. params['id']);
this.updateClassId=this.currentPays.classification.idClass;
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
updatePays()
{
  if (this.myForm.valid) {
    this.currentPays.email = this.myForm.controls['email'].value;
  this.currentPays.classification=this.paysService.consulterClassification(this.updateClassId);

  this.paysService.updatePays(this.currentPays);
  this.router.navigate(['pays']);
  }

}

}
