import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [HeroService]
})

export class AppComponent  { 
   heroes = Hero[];
   selectedHero: Hero;
   
   constructor(private heroService: HeroService) { }
   
   onSelect(hero: Hero): void{
     this.selectedHero = hero;
   }
}






 