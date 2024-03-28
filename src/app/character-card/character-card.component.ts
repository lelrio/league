import { Component, Input } from '@angular/core';
import { Item } from '../model/item.model';
import { Spell } from '../model/spell.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss'
})
export class CharacterCardComponent {
  @Input() name!: string;
  @Input() imageUrl!: string;
  @Input() hp!: number;
  @Input() maxHp!: number;
  @Input() atk!: number;
  @Input() spells!: Spell[];
  @Input() items!: Item[];
}
