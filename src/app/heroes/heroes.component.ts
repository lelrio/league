import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero.model';
import { Router } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { HeroSelectionService } from '../services/hero-selection.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero!: Hero;

  constructor(private router: Router, private heroService: HeroService, private HeroSelectionService: HeroSelectionService) { }
  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  selectHero(hero: Hero): void {
    //donne l'info au service pour pouvoir utiliser la data ailleurs
    this.HeroSelectionService.setSelectedHero(hero);

    this.selectedHero = hero;
  }

  goToFight(): void {
    if (this.selectedHero) {
      this.router.navigate(['/fight', this.selectedHero.id]);
    }
  }
}