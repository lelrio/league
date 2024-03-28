import { Injectable } from '@angular/core';
import { Hero } from '../model/hero.model';

@Injectable({
    providedIn: 'root'
})
export class HeroSelectionService {
    private selectedHero!: Hero;

    setSelectedHero(hero: Hero) {
        this.selectedHero = hero;
    }

    getSelectedHero(): Hero {
        return this.selectedHero;
    }
}
