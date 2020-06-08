import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap } from '@angular/core';

import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StableComponent } from './stable/stable.component';
import { StablemasterComponent } from './stablemaster/stablemaster.component';
import { HorseComponent } from './horse/horse.component';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    StableComponent,
    StablemasterComponent,
    HorseComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/castle-stables/' }],
  entryComponents: [AppComponent, HomeComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const mainElement = createCustomElement(HomeComponent, {
      injector: this.injector,
    });
    customElements.define('castle-stables', mainElement);
  }

  ngDoBootstrap(app) {
    if (!environment.production) {
      app.bootstrap(AppComponent);
    }
  }
}
