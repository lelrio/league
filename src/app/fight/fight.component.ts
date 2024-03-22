import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero.model';
import { Enemy } from '../model/enemy.model'
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../services/hero.service';
@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrl: './fight.component.scss'
})

export class FightComponent implements OnInit {
  selectedHero!: Hero;
  heroes = this.heroService.getHeroes();
  randomEnemy: Enemy | undefined;

  constructor(private route: ActivatedRoute, private heroService: HeroService) {
  }

  ngOnInit() {
    this.loadSelectedHero();

    this.generateRandomEnemy();
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

  generateRandomEnemy(): void {
    const randomIndex = Math.floor(Math.random() * this.heroService.heroes.length);
    this.randomEnemy = this.heroes[randomIndex];
  }

  castSpell(spellId: number) {
    const spell = this.selectedHero.spells.find(s => s.id === spellId);
    if (spell) {
      const damageDealt = spell.damage;

      this.randomEnemy!.hp -= damageDealt;

    }
  }


  startFight() {
    while (this.selectedHero.hp > 0 && this.randomEnemy!.hp > 0) {


      if (this.randomEnemy!.hp <= 0) {
        console.log('Enemy defeated!');
      }

    }
  }

}