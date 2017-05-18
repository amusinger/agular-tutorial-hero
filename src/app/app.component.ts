import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-app',
  
  templateUrl: './app.component.html'
})
export class AppComponent  { 
   heroes = HEROES;
   selectedHero: Hero;

   onSelect(hero: Hero): void{
     this.selectedHero = hero;
   }
}



const HEROES: Hero[] = [
  { id: 1, name: 'Ms. Green' },
  { id: 2, name: 'Mr. Pink' },
  { id: 3, name: 'Mr. Brown' },
  { id: 4, name: 'Mr. Blue' },
  { id: 5, name: 'Ms. Dark' },
  { id: 6, name: 'Mrs. White' },
  { id: 7, name: 'Mr. White' },
  { id: 8, name: 'Dr IQ' },
  { id: 9, name: 'Magma' },
  { id: 10, name: 'Tornado' }
];


 