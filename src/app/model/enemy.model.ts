import { Item } from './item.model';
import { Spell } from './spell.model';

export class Enemy {
  id: number;
  name: string;
  hp: number;
  maxHp: number;
  atk: number;
  spells: Spell[];
  items: Item[];
  imageUrl!: string;

  constructor(id: number, name: string, hp: number, maxHp: number, atk: number, spells: Spell[], imageUrl: string) {
    this.id = id;
    this.name = name;
    this.hp = hp;
    this.maxHp = maxHp;
    this.atk = atk;
    this.spells = spells;
    this.items = [];
    this.imageUrl = imageUrl;
  }
}
