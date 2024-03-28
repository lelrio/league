import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero.model';
import { Enemy } from '../model/enemy.model'
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../services/hero.service';
import { Spell } from '../model/spell.model';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrl: './fight.component.scss',
})

export class FightComponent implements OnInit {
  selectedHero!: Hero;
  heroes = this.heroService.getHeroes();
  initialRandomEnemy!: Enemy;
  initialSelectedHero!: Hero;
  randomEnemy?: Enemy;
  winner: string | undefined;
  roundNumber = 1;

  constructor(private route: ActivatedRoute, private router: Router, private heroService: HeroService) {
  }

  ngOnInit() {
    this.loadSelectedHero();
    this.generateRandomEnemy();

    this.selectedHero = { ...this.initialSelectedHero };
    this.winner = '';
  }


  resetSelectedHero(): void {
    this.selectedHero = { ...this.initialSelectedHero };
    console.log(this.selectedHero, "selected eero")
  }

  resetRandomEnemy(): void {
    this.randomEnemy = { ...this.initialRandomEnemy };
    console.log(this.randomEnemy, "random enemy")
  }

  loadSelectedHero() {
    const id = Number(this.route.snapshot.params['id']);
    const hero = this.heroService.getHeroById(id);

    if (hero !== undefined) {
      this.selectedHero = hero;
      this.initialSelectedHero = { ...hero }; // Store initial value
    } else {
      console.error('Hero not found');
    }

    return hero;
  }

  generateRandomEnemy(): void {
    const randomIndex = Math.floor(Math.random() * this.heroService.heroes.length);
    this.randomEnemy = { ...this.heroService.heroes[randomIndex] };
    this.initialRandomEnemy = { ...this.randomEnemy }; // Store initial value

  }


  chooseRandomSpellIndex(randomEnemy: Enemy): Spell {
    const randomIndex = Math.floor(Math.random() * randomEnemy.spells.length);
    return randomEnemy.spells[randomIndex];
  }

  enemyTurn() {
    const enemySpell = this.chooseRandomSpellIndex(this.randomEnemy!);
    const damageDealt = enemySpell.damage;

    if (this.selectedHero?.hp > 0 && this.randomEnemy!.hp > 0) {
      this.roundNumber++;
    }

    if (this.randomEnemy!.hp > 0) {
      const damageDealt = enemySpell.damage;
      this.selectedHero.hp -= damageDealt;

      if (this.selectedHero.hp < 0) {
        this.selectedHero.hp = 0;
        this.winner = this.randomEnemy!.name;
      }
    }

  }
  castSpell(spellId: number, target: Hero) {
    if (this.selectedHero.hp > 0) {
      const spell = this.selectedHero.spells.find(s => s.id === spellId);

      if (spell) {
        const damageDealt = spell.damage;
        this.randomEnemy!.hp -= damageDealt;

        if (this.randomEnemy!.hp < 0) {
          this.randomEnemy!.hp = 0;
          this.winner = this.selectedHero.name;
        }
      }
    }
    this.enemyTurn();

  }

  returnToListOfHeroes() {
    this.resetSelectedHero();
    this.resetRandomEnemy();

    this.router.navigate(['/heroes']);
  }

}