import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero.model';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrl: './fight.component.scss'
})

export class FightComponent implements OnInit {
  selectedHero: Hero;

  constructor(private route: ActivatedRoute, private heroService: HeroService) {
  }

  ngOnInit() {
    this.loadSelectedHero();

  }
  loadSelectedHero() {
    const id = Number(this.route.snapshot.params['id']);
    const hero = this.heroService.getHeroById(id);
    if (hero !== undefined) {
      this.selectedHero = hero;
    } else {
      console.error('Hero not found');
    }
  }
}
