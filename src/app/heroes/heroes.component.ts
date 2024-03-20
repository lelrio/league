import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero.model';
import { Spell } from '../model/spell.model';
import { Router } from '@angular/router';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero;

  constructor(private router: Router, private heroService: HeroService){}
  ngOnInit() {
      this.heroes = this.heroService.getHeroes();
  }

  selectHero(hero: Hero): void{
    this.selectedHero = hero;
  }

  goToFight():void{
    if(this.selectedHero){
      this.router.navigate(['/fight', this.selectedHero.id]);
    }
  }
}
