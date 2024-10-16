import { Component, OnInit } from '@angular/core';
import { Pays } from '../model/pays.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PaysService } from '../services/pays.service';
import { Classification } from '../model/classification.model';

@Component({
  selector: 'app-update-pays',
  templateUrl: './update-pays.component.html',
  styles: ``
})
export class UpdatePaysComponent implements OnInit{
  currentPays = new Pays();
  classifications!:Classification[];
  updateClassId!:number;
constructor(private activatedRoute: ActivatedRoute,
            private paysService: PaysService,
            private router:Router) { }
ngOnInit():void {
  this.classifications=this.paysService.listeClassification();

this.currentPays = this.paysService.consulterPays(this.activatedRoute.snapshot. params['id']);
this.updateClassId=this.currentPays.classification.idClass;
}
updatePays()
{
  this.currentPays.classification=this.paysService.consulterClassification(this.updateClassId);

  this.paysService.updatePays(this.currentPays);
  this.router.navigate(['pays']);

}
}
