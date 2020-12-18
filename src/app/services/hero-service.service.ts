import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HeroModel } from "../model/heroModel";

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  constructor(private app: HttpClient) { }

   //FUNCIONES GET
 getDataAll(){ 
  return this.app.get('http://localhost:3000/heroesAct').toPromise();
  }

  getbyId(id: Number){
    console.log(id);
    return this.app.get(`http://localhost:3000/heroe/${id}`).toPromise();
  }
 
  search(term){
    return this.app.get(`http://localhost:3000/heroe/${term}`).toPromise();
  }

   //FUNCIONES POST
   postHero(id: HeroModel){
  return this.app.post('http://localhost:3000/heroe', id).toPromise();
   } 
   //FUNCIONES PUT
   putHero(hero: HeroModel, id:Number){
     return this.app.put(`http://localhost:3000/heroe/${id}`, hero).toPromise();
   }
   //FUNCION DELETE
   deleteHero(id: Number){
     return this.app.delete(`http://localhost:3000/heroe/${id}`).toPromise();
   }

}
