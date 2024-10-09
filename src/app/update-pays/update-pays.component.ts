import { Component, OnInit } from '@angular/core';
import { Pays } from '../model/pays.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PaysService } from '../services/pays.service';

@Component({
  selector: 'app-update-pays',
  templateUrl: './update-pays.component.html',
  styles: ``
})
export class UpdatePaysComponent implements OnInit{
  currentPays = new Pays();
constructor(private activatedRoute: ActivatedRoute,
            private paysService: PaysService,
            private router:Router) { }
ngOnInit() {
// console.log(this.route.snapshot.params.id);
this.currentPays = this.paysService.consulterPays(this.activatedRoute.snapshot. params['id']);
console.log(this.currentPays);
}
updatePays()
{
  this.paysService.updatePays(this.currentPays);
  this.router.navigate(['pays']);

}
}
