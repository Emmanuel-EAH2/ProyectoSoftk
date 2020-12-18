import { Component, OnInit } from '@angular/core';
import { HeroModel } from "../../model/heroModel";
import { HeroServiceService } from "../../services/hero-service.service";

@Component({ 
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  

  constructor(private app: HeroServiceService) { }
  arrayHeros: any
  idHeroActualizar: any;
  heroeNew : HeroModel = new HeroModel();
  nombre: any;
  resultado: any;
  
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.app.getDataAll().then((data:any) =>{
      this.arrayHeros = data;
      console.log(this.arrayHeros);
    }).catch((err) => console.log(err)
    );
  }
  
  
  getDatabyId(){
    this.app.getbyId(this.idHeroActualizar).then((data:any)=>{
      this.heroeNew = data;
      console.log(this.heroeNew);
      }).catch((err)=>console.log(err)
    );
  }
  
  putData(){
    this.app.putHero(this.heroeNew ,this.idHeroActualizar).then((data:any)=>{
      this.heroeNew = data;
      console.log(this.heroeNew);
    }).catch((err)=>console.log(err)
    );
  }
  
  deleteHero(){
    this.app.deleteHero(this.idHeroActualizar).then((data:any)=>{
      this.heroeNew = data;
      console.log(this.heroeNew);
      console.log(this.heroeNew);
    }).catch((err)=>console.log(err)
   );
  }


  idActualzar(idHero: Number, nombre: string){
    this.idHeroActualizar = idHero;
    this.nombre = nombre;
    console.log(this.idHeroActualizar);
    console.log(this.nombre);
  }

  searchHero(term){
    this.app.search(term).then((data:any)=>{
      this.resultado = data
      console.log(this.resultado);      
     }).catch((err)=>console.log(err)
    );
  }
 }
