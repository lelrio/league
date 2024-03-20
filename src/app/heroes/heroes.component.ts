import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero.model';
import { Router } from '@angular/router';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit{
  heroes: Hero[] = [];
  selectedHero: Hero;

  constructor(private router: Router, private heroService: HeroService){}

  ngOnInit(){
    console.log("tutu");
    this.heroes = this.heroService.getHeroes();
    console.log("aaaaaa");
  }

  selectHero(id: number): void{
    
    console.log("tettete")
    const selectedHero = this.heroService.getHeroById(id);

    if(selectedHero){
      
      this.selectedHero = selectedHero;
      
    }
  }
  
  goToFight():void{
    if(this.selectedHero){
      this.router.navigate(['/fight', this.selectedHero.id]);
    }
  }
}
