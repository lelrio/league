import { Item } from "./item.model";
import { Spell } from "./spell.model";

export class Hero {
    id: number;
    name: string;
    hp: number;
    atk: number;
    spells: Spell[];
    items: Item[];
    imageUrl!: string;
  
    constructor(id: number, name: string, hp: number, atk: number, spells: Spell[], imageUrl: string) {
      this.id = id;
      this.name = name;
      this.hp = hp;
      this.atk = atk;
      this.spells = spells;
      this.items = [];
      this.imageUrl = imageUrl;
    }
  }
  