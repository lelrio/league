import { Component } from '@angular/core';
import { Hero } from '../model/hero.model';
import { HeroService } from '../services/hero.service';
import { Router } from 'express';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrl: './fight.component.scss'
})
export class FightComponent {
  selectedHero: Hero | null = null;

  constructor(private router: Router, private heroService: HeroService) {}

}
