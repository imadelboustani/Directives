import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BasicHightLightDirective} from './basic-highlight/basic-hightlight.directive';
import { BetterHightLightDirective } from './better-hight-light.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHightLightDirective,
    BetterHightLightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
