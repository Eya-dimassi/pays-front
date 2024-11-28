import { Injectable } from '@angular/core';
import { Pays } from '../model/pays.model';
import { Classification } from '../model/classification.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { ClassificationWrapper } from '../model/classificationWrapped.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})

export class PaysService {
 
  apiURLClass: string = 'http://localhost:9090/pays/class';
  pays!:Pays[];
  classifications:Classification[]=[];
  paysRecherche!:Pays[];

  //classification = new Classification();

  constructor(private http : HttpClient) {
    /*this.classifications=[
      {idClass:1,nomClass:"Developed"},
      {idClass:2,nomClass:"Developing"},
      {idClass:3,nomClass:"Emerging"}
    ];*/
    /*this.pays =[ 
      {idPays:1 , nomPays:"Tunisia", population:12.36 ,continent:"Africa",independenceDate:new Date("1956-03-20"),classification:{idClass:2,nomClass:"Developing"},email:"info@tunisia.com"},
      {idPays:2 , nomPays:"France", population:67.97 ,continent:"Europe",independenceDate:new Date("1789-07-14"), classification:{idClass:1,nomClass:"Developed"},email:"info@france.com"},
      {idPays:3 , nomPays:"Algeria", population:44.9 ,continent:"Africa",independenceDate:new Date("1962-07-05"),classification:{idClass:2,nomClass:"Developing"},email:"info@algeria.com"}
      
     ]*/
   }
   listePays():Observable<Pays[]>{
    return this.http.get<Pays[]>(apiURL);

   }
   ajouterPays( p: Pays):Observable<Pays[]>{
    return this.http.post<Pays[]>(apiURL, p, httpOptions);
   }
   supprimerPays(id : number) {
    const url = `${apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }
    consulterPays(id: number): Observable<Pays> {
      const url = `${apiURL}/${id}`;
      return this.http.get<Pays>(url);
      }
      trierPays(){
        this.pays = this.pays.sort((n1,n2) => {
        if (n1.idPays! > n2.idPays!) {
        return 1;
        }
        if (n1.idPays! < n2.idPays!) {
        return -1;
        }
        return 0;
        });
        }
        updatePays(p:Pays): Observable<Pays>
        {
          return this.http.put<Pays>(apiURL, p, httpOptions);
        
        }
   ajouterClassification(clas: Classification):Observable< Classification> {
    return this.http.post<Classification>(this.apiURLClass, clas, httpOptions);
  }
  listeClassification():Observable<ClassificationWrapper>{
    return this.http.get<ClassificationWrapper>(this.apiURLClass);
    }
  
  
  


/*updateClassification(updatedClass: Classification){
  const index = this.classifications.findIndex(clas => clas.idClass === updatedClass.idClass);
    if (index > -1) {
      this.classifications[index] = updatedClass;
    }
}*/
updateClassification(updatedClass: Classification): void {
  const index = this.classifications.findIndex(c => c.idClass === updatedClass.idClass);
  if (index !== -1) {
    this.classifications[index] = {...updatedClass};
  } else {
    this.classifications.push({...updatedClass});
  }
}
rechercherParNom(nom: string):Observable< Pays[]> {
  const url = `${apiURL}/paysByName/${nom}`;
  return this.http.get<Pays[]>(url);
  }



/*consulterClassification(id:number): Classification{
    return this.classifications.find(clas => clas.idClass == id)!;
    }*/
rechercherParClassification(idClass: number): Observable< Pays[]>{
  const url = `${apiURL}/paysclass/${idClass}`;
  return this.http.get<Pays[]>(url);
}
      
}
