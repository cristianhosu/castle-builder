import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EmojiDirective } from './directives/emoji.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    LandingPageComponent,
    EmojiDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
