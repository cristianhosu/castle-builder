import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: 'landing-page',
    component: LandingPageComponent,
  },
  {
    matcher: (url) => {
      if (url.length >= 1) {
        return {
          consumed: url,
          posParams: {
            appName: url[0],
          },
        };
      } else {
        return null;
      }
    },
    component: ShellComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/landing-page',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
