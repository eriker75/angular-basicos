import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importaciones directas de componentes
import { AppComponent } from './app.component';

//importaciones directas de modulos
import {HeroesModule} from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
