import { Injectable, OnInit } from '@angular/core';
import { Hero } from '../model/hero.model';
import { Spell } from '../model/spell.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroes: Hero[] = [
    {
      id: 1,
      name: 'Darius',
      hp: 100,
      atk: 20,
      spells: [
        { name: 'Décimation', damage: 100 },
        { name: 'Estropiaison', damage: 70 },
        { name: 'Crampon', damage: 10 },
        { name: 'Guillotine Noxienne', damage: 150 }],
      imageUrl: "/assets/images/heroes/darius.jfif",
      items: []
    },
    {
      id: 2,
      name: 'Olaf',
      hp: 120,
      atk: 25,
      spells: [
        { name: 'Déchireuse', damage: 100 },
        { name: 'Force Décuplée', damage: 20 },
        { name: 'Frappe Sauvage', damage: 120 },
        { name: 'Ragnarok', damage: 140 }],
      imageUrl: "/assets/images/heroes/olaf.jpg",
      items: []
    },
    {
      id: 1,
      name: 'Ahri',
      hp: 80,
      atk: 40,
      spells: [
        { name: 'Orbe illusion', damage: 100 },
        { name: 'Lucioles', damage: 50 },
        { name: 'Charme', damage: 30 },
        { name: 'Assaut Spirituel', damage: 140 }
      ],
      imageUrl: "/assets/images/heroes/ahri.jfif",
      items: [
        {name:'Coiffe de Rabadon', stat: 120}
      ]
    }
  ];

  constructor() { }

  getHeroes(): Hero[] {
    return this.heroes;
  }

  getHeroById(id: number): Hero | undefined {
    return this.heroes.find(hero => hero.id === id);
  }
}