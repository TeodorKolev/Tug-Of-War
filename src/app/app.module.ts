import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RopeComponent} from './components/rope/rope.component';
import {PlayerComponent} from './components/player/player.component';
import {AlertComponent} from './components/alert/alert.component';
import {EndingService} from './services/ending/ending.service';


@NgModule({
  declarations: [
    AppComponent,
    RopeComponent,
    PlayerComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EndingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
