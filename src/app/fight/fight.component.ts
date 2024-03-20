import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero.model';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrl: './fight.component.scss'
})

export class FightComponent implements OnInit{
  selectedHero: Hero;

  constructor(private route: ActivatedRoute, private heroService: HeroService){
  }

  ngOnInit(){
    const id = this.route.snapshot.params['id'];


    console.log(this.heroService.getHeroById(id));
    

    console.log(id)
    console.log(this.route)
  }
}
