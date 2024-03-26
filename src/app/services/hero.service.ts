import { Injectable } from '@angular/core';
import { Hero } from '../model/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  public heroes: Hero[] = [
    {
      id: 1,
      name: 'Darius',
      hp: 100,
      maxHp: 100,
      atk: 20,
      spells: [
        { id: 1, name: 'Décimation', damage: 100 },
        { id: 2, name: 'Estropiaison', damage: 70 },
        { id: 3, name: 'Crampon', damage: 10 },
        { id: 4, name: 'Guillotine Noxienne', damage: 150 }],
      imageUrl: '/assets/images/heroes/darius.jfif',
      items: []
    },
    {
      id: 2,
      name: 'Olaf',
      hp: 100,
      maxHp: 100,
      atk: 25,
      spells: [
        { id: 5, name: 'Déchireuse', damage: 100 },
        { id: 6, name: 'Force Décuplée', damage: 20 },
        { id: 7, name: 'Frappe Sauvage', damage: 120 },
        { id: 8, name: 'Ragnarok', damage: 140 }],
      imageUrl: "/assets/images/heroes/olaf.jpg",
      items: []
    },
    {
      id: 3,
      name: 'Ahri',
      hp: 80,
      maxHp: 80,
      atk: 40,
      spells: [
        { id: 9, name: 'Orbe illusion', damage: 100 },
        { id: 10, name: 'Lucioles', damage: 50 },
        { id: 11, name: 'Charme', damage: 30 },
        { id: 12, name: 'Assaut Spirituel', damage: 140 }
      ],
      imageUrl: "/assets/images/heroes/ahri.jfif",
      items: [
        { name: 'Coiffe de Rabadon', stat: 120 }
      ]
    }
  ];

  public getHeroes(): Hero[] {
    return this.heroes;
  }

  public getHeroById(id: number): Hero | undefined {
    return this.heroes.find(hero => hero.id === id);
  }
}