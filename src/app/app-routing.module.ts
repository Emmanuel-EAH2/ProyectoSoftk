import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateHeroComponent } from './components/create-hero/create-hero.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "createHero", component: CreateHeroComponent},
  {path: '', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
