import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { Spell } from '../spell.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero: Hero | null = null;


  constructor(private router: Router){}
  ngOnInit() {
    const dariusSpells: Spell[] = [
      { name: 'Décimation', damage: 100 },
      { name: 'Estropiaison', damage: 70 },
      { name: 'Crampon', damage: 10 },
      { name: 'Guillotine Noxienne', damage: 150 }
    ];
    const olafSpells: Spell[] = [
      { name: 'Déchireuse', damage: 100 },
      { name: 'Force Décuplée', damage: 20 },
      { name: 'Frappe Sauvage', damage: 120 },
      { name: 'Ragnarok', damage: 140 }
    ];
    const ahriSpells: Spell[] = [
      { name: 'Orbe illusion', damage: 100 },
      { name: 'Lucioles', damage: 50 },
      { name: 'Charme', damage: 30 },
      { name: 'Assaut Spirituel', damage: 140 }
    ];

    const hero1 = new Hero(1, 'Darius', 100, 20, dariusSpells, "/assets/images/heroes/darius.jfif");
    const hero2 = new Hero(2, 'Olaf', 120, 25, olafSpells, "/assets/images/heroes/olaf.jpg");
    const hero3 = new Hero(3, 'Ahri', 80, 18, ahriSpells, "/assets/images/heroes/ahri.jfif");

    this.heroes.push(hero1, hero2, hero3);
  }

  selectHero(hero: Hero): void{
    if(this.selectedHero === hero){
      this.selectedHero = null;
    }else{
      this.selectedHero = hero;
      console.log(hero.id);
    }
  }

  goToFight():void{
    if(this.selectedHero){
      this.router.navigate(['/fight', this.selectedHero.id]);
    }
  }
}
