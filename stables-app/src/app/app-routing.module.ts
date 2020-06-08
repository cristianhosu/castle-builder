import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StableComponent } from './stable/stable.component';
import { StablemasterComponent } from './stablemaster/stablemaster.component';
import { HorseComponent } from './horse/horse.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'stables',
        component: StableComponent,
      },

      { path: 'stablemaster', component: StablemasterComponent },
      { path: 'horse/:id', component: HorseComponent },
      {
        path: '',
        redirectTo: '/stables',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
