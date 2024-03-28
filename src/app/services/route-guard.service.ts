import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from './hero.service';
import { HeroSelectionService } from '../services/hero-selection.service';

@Injectable({
    providedIn: 'root'
})
export class HeroSelectedGuard {
    constructor(private router: Router, private HeroSelectionService: HeroSelectionService) { }

    canActivate(): boolean {
        const selectedHero = this.HeroSelectionService.getSelectedHero();

        if (selectedHero) {
            return true;
        } else {
            this.router.navigate(['/heroes']);
            return false;
        }
    }
}
