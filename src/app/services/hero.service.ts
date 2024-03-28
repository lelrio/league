import { Injectable } from '@angular/core';
import { Hero } from '../model/hero.model';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

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
        { id: 1, name: 'Décimation', damage: 50 },
        { id: 2, name: 'Estropiaison', damage: 40 },
        { id: 3, name: 'Crampon', damage: 10 },
        { id: 4, name: 'Guillotine Noxienne', damage: 80 }],
      imageUrl: '/assets/images/heroes/darius.webp',
      items: []
    },
    {
      id: 2,
      name: 'Olaf',
      hp: 100,
      maxHp: 100,
      atk: 25,
      spells: [
        { id: 5, name: 'Déchireuse', damage: 30 },
        { id: 6, name: 'Force Décuplée', damage: 20 },
        { id: 7, name: 'Frappe Sauvage', damage: 50 },
        { id: 8, name: 'Ragnarok', damage: 70 }],
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
        { id: 9, name: 'Orbe illusion', damage: 50 },
        { id: 10, name: 'Lucioles', damage: 30 },
        { id: 11, name: 'Charme', damage: 30 },
        { id: 12, name: 'Assaut Spirituel', damage: 70 }
      ],
      imageUrl: "/assets/images/heroes/ahri.jfif",
      items: [
        { name: 'Coiffe de Rabadon', stat: 120 }
      ]
    }
  ];

  public getHeroes(): Observable<Hero[]> {
    const copiedHeroes = this.heroes.map(hero => ({ ...hero }));
    return of(copiedHeroes);
  }

  public getHeroById(id: number): Hero {
    const hero = this.heroes.find(hero => hero.id === id);
    if (!hero) {
      throw new Error(`Hero with ID ${id} not found`);
    }
    return hero;
  }

  getInitialHero(heroId: number): Hero {

    const initialHero = this.heroes.find(hero => hero.id === heroId);

    if (!heroId) {
      throw new Error(`Hero with ID ${heroId} not found`);
    }

    return initialHero!;
  }

  getInitialEnemy(enemyId: number): Hero {
    const initialEnemy = this.heroes.find(hero => hero.id === enemyId);

    if (!enemyId) {
      throw new Error(`Hero with ID ${enemyId} not found`);
    }

    return initialEnemy!;
  }
}