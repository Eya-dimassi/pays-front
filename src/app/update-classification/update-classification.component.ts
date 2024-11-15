import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Classification } from '../model/classification.model';

@Component({
  selector: 'app-update-classification',
  templateUrl: './update-classification.component.html',
  
})
export class UpdateClassificationComponent implements OnInit{
  
  @Input()
  classifications! : Classification;
  @Input()
  ajout!:boolean;

  @Output()
   classUpdated = new EventEmitter<Classification>();
  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateClassification ",this.classifications);
    }
  saveClassification(){
    
      this.classUpdated.emit(this.classifications);

    }


}
