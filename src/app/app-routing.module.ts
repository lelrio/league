import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { AppComponent } from './app.component';
import { FightComponent } from './fight/fight.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: '', component: HeroesComponent },
  { path: 'fight/:id', component: FightComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
