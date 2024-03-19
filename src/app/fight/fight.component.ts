import { Component } from '@angular/core';
import { Hero } from '../model/hero.model';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrl: './fight.component.scss'
})
export class FightComponent {
  selectedHero: Hero | null = null;

}
