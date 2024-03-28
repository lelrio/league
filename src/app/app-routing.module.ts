import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { AppComponent } from './app.component';
import { FightComponent } from './fight/fight.component';
import { WrongRouteComponent } from './wrong-route/wrong-route.component';
import { HeroSelectedGuard } from './services/route-guard.service';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: '', component: HeroesComponent },
  { path: 'fight/:id', component: FightComponent, canActivate: [HeroSelectedGuard] },
  { path: 'not-found', component: WrongRouteComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
