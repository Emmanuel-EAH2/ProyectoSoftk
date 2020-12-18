import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroModel } from "../../model/heroModel";
import { HeroServiceService } from "../../services/hero-service.service";

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent implements OnInit {

  constructor(private serivce: HeroServiceService) { }
heroeNew : HeroModel = new HeroModel()
  ngOnInit(): void {
  }

  enviarHeroe(form: NgForm){
    this.serivce.postHero(this.heroeNew).then((data:any)=>{
        console.log(data);
    }).catch((err)=>console.log(err)
    );
  };
}
